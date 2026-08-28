require("dotenv").config();

const fs = require("fs");
const path = require("path");

const localFfmpeg = path.join(__dirname, "vendor", "ffmpeg", "ffmpeg.exe");
if (!process.env.FFMPEG_PATH && fs.existsSync(localFfmpeg)) {
  process.env.FFMPEG_PATH = localFfmpeg;
}
const { Client, GatewayIntentBits, Collection, Events } = require("discord.js");
const { Player } = require("discord-player");
const { DefaultExtractors } = require("@discord-player/extractor");
const { prefix } = require("./config.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent,
  ],
});

const player = new Player(client);

client.commands = new Collection();
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(path.join(commandsPath, file));
  if (!command?.name) continue;
  client.commands.set(command.name, command);
}

client.once(Events.ClientReady, (readyClient) => {
  console.log(`ready as ${readyClient.user.tag}`);
});

player.events.on("playerStart", (queue, track) => {
  const channel = queue.metadata?.channel;
  if (channel) {
    channel.send(`Now playing: **${track.title}**`).catch(() => {});
  }
});

player.events.on("error", (_queue, error) => {
  console.error("Player error:", error);
});

player.events.on("playerError", (_queue, error) => {
  console.error("Playback error:", error);
});

client.on(Events.MessageCreate, async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const commandName = args.shift().toLowerCase();

  if (commandName === "asl") {
    const [age, sex, location] = args;
    return message.reply(
      `Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}.`
    );
  }

  if (commandName === "kick") {
    const member = message.mentions.members?.first();
    if (!member) return message.channel.send("Mention someone to kick.");
    try {
      await member.kick();
    } catch (error) {
      console.error(error);
      return message.channel.send("I could not kick that member.");
    }
    return;
  }

  if (commandName === "clear") {
    await message.delete().catch(() => {});
    return;
  }

  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases?.includes(commandName));

  if (!command) return;

  try {
    await command.execute(client, message, args);
  } catch (error) {
    console.error(error);
    await message.channel.send("Something went wrong running that command.");
  }
});

async function start() {
  if (!process.env.DISCORD_TOKEN) {
    console.error("Set DISCORD_TOKEN in your environment or a .env file.");
    process.exit(1);
  }

  const { YoutubeExtractor } = await import("discord-player-youtube");

  await player.extractors.register(YoutubeExtractor, {
    cookie: process.env.YOUTUBE_COOKIE,
    disableYTJSLog: true,
  });
  await player.extractors.loadMulti(DefaultExtractors);

  await client.login(process.env.DISCORD_TOKEN);
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});

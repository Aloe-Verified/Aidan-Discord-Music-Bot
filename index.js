const { Client, Intents, DiscordAPIError} = require("discord.js");
const Discord = require("discord.js");
const fs = require('fs');
const ytdl = require('ytdl-core');
const { joinVoiceChannel } = require('@discordjs/voice');
const client = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES]
});

const {prefix,token} = require("./config.json");

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
  for(const file of commandFiles){
      const command = require(`./commands/${file}`);
   
      client.commands.set(command.name, command);
  }

client.on("ready", () => {
    console.log("ready");
})

const queue = new Map();
client.on("messageCreate", message => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  // else
    const args = message.content.slice(prefix.length).split(/ +/g);
    const command = args.shift().toLowerCase();

  // if (message.content.startsWith(prefix+"foo")) {
  //   message.channel.send("bar!");
  // }
  if (command === "asl") {
    let age = args[0]; // Remember arrays are 0-based!.
    let sex = args[1];
    let location = args[2];
    message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}.`);
  }
  if (command === "kick") {
    let member = message.mentions.members.first();
    member.kick();
  }
  if (command === "clear"){
      message.delete();
  }

  

  else if(command == "play"){
    client.commands.get('play').execute(client,message,args);
  }
  else if(command == "skip"){
    client.commands.get('skip').execute(client,message,args);
    }
    
  }
  
  

});



client.on("messageCreate", (message) => {
  if (message.content.startsWith("zain")) {
    message.channel.send("stupid");
  }
});


client.login(token);

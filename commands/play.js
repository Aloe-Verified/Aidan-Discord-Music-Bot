const { useMainPlayer } = require("discord-player");

module.exports = {
  name: "play",
  description: "play a song",
  execute: async (_client, message, args) => {
    const query = args.join(" ").trim();
    if (!query) {
      return message.channel.send("Give me a song name or URL.");
    }

    const voiceChannel = message.member?.voice?.channel;
    if (!voiceChannel) {
      return message.channel.send("Join a voice channel first.");
    }

    const player = useMainPlayer();

    try {
      const { track } = await player.play(voiceChannel, query, {
        nodeOptions: {
          metadata: { channel: message.channel },
        },
      });

      return message.channel.send(`Queued **${track.title}**`);
    } catch (error) {
      console.error(error);
      return message.channel.send(`Could not play that: ${error.message}`);
    }
  },
};

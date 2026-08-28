const { useQueue } = require("discord-player");

module.exports = {
  name: "skip",
  description: "skip the current song",
  execute: async (_client, message) => {
    const queue = useQueue(message.guild.id);

    if (!queue?.currentTrack) {
      return message.channel.send("No music is being played");
    }

    const skipped = queue.currentTrack;
    queue.node.skip();
    return message.channel.send(`Skipped **${skipped.title}**`);
  },
};

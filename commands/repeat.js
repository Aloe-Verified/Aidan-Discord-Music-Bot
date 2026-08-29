module.exports = {
  name: "repeat",
  description: "repeat the text you pass in",
  execute: async (_client, message, args) => {
    const text = args.join(" ").trim();
    if (!text) {
      return message.channel.send("Give me something to repeat.");
    }

    if (text.length > 2000) {
      return message.channel.send("That message is too long to send.");
    }

    return message.channel.send(text);
  },
};

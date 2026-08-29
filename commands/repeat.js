module.exports = {
  name: "repeat",
  description: "repeat text a given number of times",
  execute: async (_client, message, args) => {
    const count = Number.parseInt(args[0], 10);
    const text = args.slice(1).join(" ").trim();

    if (!Number.isInteger(count) || count < 1 || !text) {
      return message.channel.send("Usage: `-repeat <number> <text>`");
    }

    if (count > 50) {
      return message.channel.send("I can only repeat something up to 50 times.");
    }

    const output = Array.from({ length: count }, () => text).join("\n");

    if (output.length <= 2000) {
      return message.channel.send(output);
    }

    for (let i = 0; i < output.length; i += 2000) {
      await message.channel.send(output.slice(i, i + 2000));
    }
  },
};

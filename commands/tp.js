module.exports = {
  name: "tp",
  aliases: ["t"],
  description: "play a song (alias of play)",
  execute: (client, message, args) => {
    return client.commands.get("play").execute(client, message, args);
  },
};

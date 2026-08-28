const { useMainPlayer } = require("discord-player");

module.exports = {
  getPlayer() {
    return useMainPlayer();
  },
};

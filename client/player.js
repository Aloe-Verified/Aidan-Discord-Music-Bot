const{Player} = require("discord-player");
const { Client } = require("discord.js");
const client = require("../index.js");

const player = new Player(client,{
    ytdlOptions: {
        quality:"highestaudio",
        highWaterMark: 1<<25,
    
    },
});

module.exports = player;

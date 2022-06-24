const player = require("../client/player.js");
module.exports = {
    name : "skip",
    description : "skip the current song",
    execute: async(client, message, args)=>{
        const queue = player.getQueue(message.guildId);
        if(!queue.playing){
            return message.channel.send("No music is being played");
        }
        
        await queue.skip();
        message.channel.send("No music is being played");
        
    }
}

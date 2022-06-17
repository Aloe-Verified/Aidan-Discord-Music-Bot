const { Client, Intents } = require("discord.js");
const Discord = require("discord.js");
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

const { QueryType, Player } = require("discord-player");
const player = new Player(client);

module.exports = {
    name: "play",
    description: "play a song",
    options:[
        { 
            name: "songtitle",
            description: "title of the song",
            type: "STRING",
            required: true,
        }
    ],
    
    execute:async(client,message,args) => {
        const songTitle = args.join(" ");
        if (!message.member.voice.channel)
            return channel.message.send("Voice Channel not found");
        const searchResult = await player.search(songTitle, {
            requestedBy: message.user,
            searchEngine: QueryType.AUTO,
        });
        const queue = await player.createQueue(message.guild, {
            metadata: message.channel,
        });
        if (!queue.connection)
        {
            await queue.connect(message.member.voice.channel);
            message.channel.send(`Playing ${songTitle}`);
        }
        searchResult.playlist
            ? queue.addTracks(searchResult.tracks)
            : queue.addTrack(searchResult.tracks[0]);

        if (!queue.playing) await queue.play();
    }
}

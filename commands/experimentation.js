// const ytdl = require('ytdl-core');
// const ytSearch = require('yt-search');
// const { joinVoiceChannel } = require('@discordjs/voice');
// const {Message, MessageEmbed } = require('discord.js');
// // module.exports.run = async(client, message, args) => {
// //     const channel = message.member.voice;
// //     if(!channel)return message.channel.send("Nothing!")
// //     const connection =  voiceDiscord.joinVoiceChannel({
// //         channelId:channel.id,
// //         guildId: channel.guild.id,
// //         adapterCreator: channel.guild.voiceAdaptorCreator,
// //     })

// // }
// // function joinChannel(){
// //     const{ channel } = message.member.voice;
// //     const botchannel = message.guild.me.voice.channel;
// //     if(!channel){return message.reply("not in a voice channel!")};
// //     if(botchannel){return message.reply("idk when this triggers")};
// //     let VoiceConnection = voiceDiscord.joinVoiceChannel({
// //         channelId:channel.id,
// //         guildId: channel.guild.id,
// //         adapterCreator: channel.guild.voiceAdaptorCreator,
// //     })
    
// // }
// // module.exports = {
// //     name: 'play',
// //     description: 'Joins and plays a video from youtube',
// //     async execute(message,args){
// //         const voiceChannel = message.member.voice.channel;
// //         if(!voiceChannel)return message.channel.send("I'm not in a voice channel");
// //         if(!voiceChannel.permissionsFor(message.client.user).has('CONNECT'))return message.channel.send("Don't have permission to join VC");
// //         if(!voiceChannel.permissionsFor(message.client.user).has('SPEAK'))return message.channel.send("Don't have permission to join VC");
// //         if(!args.length)return message.channel.send("You didn't input a song"); 
// //         const connection = await voiceChannel.join();
// //         //awaits the value of the Promise(voiceChannel.join)
// //         const videoFinder = async(query) =>{
// //             const videoResult = await ytSearch(query);
// //             if(videoResult.videos.length>=1)return videoResult[0];
// //             else return null;
     
// //         }
        // const video = await videoFinder(args.join(' '));
        // if(video){
        //     const stream = ytdl(video.url,{filter:'audioonly'});
        //     connection.play(stream);
// //         }
// //     }
// // }
// module.exports = {
//     name: 'play',
//     description: 'Joins and plays a video from youtube',
//     async execute(message, args) {

//         const voiceChannel = message.member.voice.channel;
 
//         if (!voiceChannel) return message.channel.send('You need to be in a channel to execute this command!');
//         const permissions = voiceChannel.permissionsFor(message.client.user);
//         if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissions');
//         if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissions');
//         if (!args.length) return message.channel.send('You need to send the second argument!');
 
//         // const validURL = (str) =>{
//         //     var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
//         //     if(!regex.test(str)){
//         //         return false;
//         //     } else {
//         //         return true;
//         //     }
//         // }
 
//         // if(validURL(args[0])){
 
            
//              const connection = joinVoiceChannel({
// 	            channelId: channel.id,
// 	             guildId: message.guild.id,
// 	             adapterCreator: message.guild.voiceAdapterCreator,
//              });
//             // const stream  = ytdl(args[0], {filter: 'audioonly'});
 
//             // connection.play(stream, {seek: 0, volume: 1})
//             //  .on('finish', () =>{
//             //        voiceChannel.leave();
//             //        message.channel.send('leaving channel');
//             //  });
 
            
 
//             // return
//         // }
//     }
// }
    
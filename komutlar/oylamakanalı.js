const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db');
var ayarlar=require('../ayarlar.json');


exports.run = async (client, message, args) => {
       var prefix ="";
var ayarlar=require('../ayarlar.json');
prefix=db.fetch(`prefix_${message.guild.id}`);
if(!prefix) prefix=ayarlar.prefix;
 if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`:no_entry: Oylama kanalı ayarlamak için <Yönetici> yetkisine sahip olman gerek.`)}})
     let oylamakanali = message.mentions.channels.first();
     if (!oylamakanali) return message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Oylama kanalı ayarlamak için bir kanal etiketlemeniz gerekli. ${prefix}oylamakanalı #kanal`)}})
    db.set(`okanal_${message.guild.id}`, oylamakanali.id)
     message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Kanal ${oylamakanali} olarak ayarlandı!`)}})
     
   }
   

    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['okanal'],
    permLevel: 3,
    kategori: "yetkili"
}

exports.help = {
    name: 'oylamakanalı',
    description: 'Oylama kanalını seçmenize yarar',
    usage: 'oylamakanalı <#kanal>'
}
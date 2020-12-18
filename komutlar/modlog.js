const Discord = require('discord.js');
const db = require('quick.db')
var ayarlar=require('../ayarlar.json');

   

exports.run = async (client, message, args) => {
  var prefix ="";
var ayarlar=require('../ayarlar.json');
prefix=db.fetch(`prefix_${message.guild.id}`);
if(!prefix) prefix=ayarlar.prefix;  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)}})
  
  let modlogs = db.get(`tc-modlog_${message.guild.id}`)
  
  if(!modlogs) {
    let kanal = message.mentions.channels.first();
    if(!kanal) return message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Hatalı kullandın! Örnek Kullanım: ${prefix}modlog <#kanal>`)}})

    db.set(`tc-modlog_${message.guild.id}`, kanal.id)
    const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
    message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Modlog kanalı başarılı bir şekilde ayarlandı.:white_check_mark:`)}})
    
    
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mlog'],
    permLevel: 3,
    kategori: 'yetkili'
    
}

exports.help = {
    name: 'modlog',
    description: 'Log odasını ayaralamanıza yarayan komut',
    usage: 'modlog <#kanal>'
}

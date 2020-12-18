const Discord = require('discord.js');
exports.run = async (client, message, args) => {
var db=require("quick.db");  
var ayarlar=require('../ayarlar.json');

     var prefix ="";
var ayarlar=require('../ayarlar.json');
prefix=db.fetch(`prefix_${message.guild.id}`);
if(!prefix) prefix=ayarlar.prefix;
  
  
  var rol=message.mentions.roles.first();
  var kanal=message.mentions.channels.first();
  if(!rol) return message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Lütfen bir rol etiketle Örnek kullanım: ${prefix}otorol <@rol> <#kanal>`)}});
  if(!kanal) return message.channel.send("Lütfen bir kanal etiketle")
  
  db.set(`otorol_${message.guild.id}`,rol.id)
  db.set(`otorolKanal_${message.guild.id}`,kanal.id)
  message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`:white_check_mark: Otorol başarıyla  ${rol.name} olarak ayarlandı. Log Kanalı İse ${kanal} olarak ayarlandı`)}});
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['otorol-ayarla','oto-rol-ayarla'],
  permLevel: 2,
  kategori: "yetkili"
}
exports.help = {
  name: 'otorol',
  description: 'Sunucuya özel otorol ayarlar.',
  usage: 'otorol <@rol> <#kanal>'
}
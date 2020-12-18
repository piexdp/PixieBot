const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');


exports.run = async (client, message, args) => {
      var prefix ="";
var ayarlar=require('../ayarlar.json');
prefix=db.fetch(`prefix_${message.guild.id}`);
if(!prefix) prefix=ayarlar.prefix;
    
  
  let cfxistek = await db.fetch(`istekkanal${message.guild.id}`)
  let cfxistekkanal = message.mentions.channels.first();
  
  const cfx1 = new Discord.RichEmbed()
  .setDescription(`İstek Kanalı ${cfxistekkanal} olarak ayarlandı.`)
  .setColor('RONDOM')
  .setFooter(`İstek Kanal Sistemi.`, client.user.avatarURL)
  const cfx2 = new Discord.RichEmbed()
  .setDescription(`İstek Kanalı Kapatıldı.`)
  .setColor('RONDOM')
  .setFooter(`İstek Kanal Sistemi.`, client.user.avatarURL)
  const cfxembed = new Discord.RichEmbed()
  .setTitle(`**\`İstek Kanal Kurulum Sistemi\`**`)
  .setDescription(`** ** \n**Ayarlamak İçin:** \`${prefix}istek-kanal #kanal\`\n\n **Kapatmak İçin:** \`${prefix}istek-kanal kapat\``)
  .setColor('RONDOM')
  .setFooter(`İstek Kanal Sistemi.`, client.user.avatarURL)
  
  
  if (!args[0]) return message.channel.send(cfxembed)
  
  if (args[0] == cfxistekkanal) return db.set(`istekkanal${message.guild.id}`, cfxistekkanal.id) - message.channel.send(cfx1);
    

  if (args[0] == 'ayarla') {
    
    db.set(`istekkanal${message.guild.id}`, cfxistekkanal.id)
    message.channel.send(cfx1)
    
    
  }
  
  if (args[0] == 'kapat') {
    
    db.delete(`istekkanal${message.guild.id}`)
    message.channel.send(cfx2)
    
  }
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['ikanal',],
  permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
  name: 'istek-kanal',
  description: 'İstek sistemi için log kanalı ayarlar',
  usage: 'istek-kanal #kanal'
};
const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (Octopus, message, args) => {
  let msg = await message.channel.send("Test Ediliyor.:clock1:");
  let msg1 = await message.channel.send("Test Ediliyor..:clock1:");
  let msg2 = await message.channel.send("Test Ediliyor...:clock1:");
  let testembed = new Discord.RichEmbed()
  .setColor("0xe2ff00")
  .setDescription("Botta Hiçbir Sorun Yok Herşey Tıkırında. :sunglasses:")
  message.channel.send(testembed);
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['t'], 
  permLevel: 4,
  kategori:"yapımcı"
};

exports.help = {
  name: 'test', 
  description: 'taslak', 
  usage: 'test'
};

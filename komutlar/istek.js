const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
 
exports.run = async function(client, message, args) {
  
  var prefix ="";
var ayarlar=require('../ayarlar.json');
prefix=db.fetch(`prefix_${message.guild.id}`);
if(!prefix) prefix=ayarlar.prefix;
  
  let user = message.author
    
  const cfx1 = new Discord.RichEmbed()
  .setDescription(`**İstek Kanalı Ayarlanmamış!** \n\n **Ayarlamak İçin:** \`${prefix}istek-kanal #kanal\``)
  .setColor('RONDOM')
  .setFooter(` İstek Sistemi.`, client.user.avatarURL)
  const cfx2 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` Lütfen isteğinizi belirtin.`)
  .setColor('RONDOM')
  .setFooter(`İstek Sistemi.`, client.user.avatarURL)
  const cfx3 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` İsteğinin Gönderilmesini istiyorsan \`istiyorum\` yazman gerekiyor.`)
  .setColor('RONDOM')
  .setFooter(`İstek Sistemi.`, client.user.avatarURL)
  const cfx4 = new Discord.RichEmbed()
  .setDescription(`\`${user.tag}\` İsteğin bildirildi!`)
  .setColor('RONDOM')
  .setFooter(`İstek Sistemi.`, client.user.avatarURL)
  
  
  
    let cfxistekkanal = await db.fetch(`istekkanal${message.guild.id}`)
    let chan = message.guild.channels.find('id', cfxistekkanal)
    let code = args.slice(0).join(' ');
    if (!cfxistekkanal) return message.channel.send(cfx1)
    if (code.length < 1) return message.channel.send(cfx2);
  if (message.author) {
message.channel.send(cfx3)

.then(() => {
message.channel.awaitMessages(response =>response.content ==='istiyorum', {
max: 1,
time: 30000,
errors: ['time'],
})

.then((collected) => {
message.channel.send(cfx4)

const cfx = new Discord.RichEmbed()
.setColor("#00ff88")
.addField(`Kullanıcı Adı`,message.author.username,true)
.addField(`Kullanıcı ID`,message.author.id,true)
.addField(`Kullanıcı Tagı`,message.author.discriminator,true)
.addField("İstek", code)
.setThumbnail(message.author.avatarURL)
chan.send(cfx);
});
});
}};


exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0,
  kategori:"genel"
};

exports.help = {
  name: 'istek',
  description: 'Yetkililerden herhangi bir şey istemenizi sağlar',
  usage: 'istek <istediğiniz>'
};

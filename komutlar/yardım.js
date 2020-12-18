const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 var prefix ="";
var ayarlar=require('../ayarlar.json');
prefix=db.fetch(`prefix_${message.guild.id}`);
if(!prefix) prefix=ayarlar.prefix;
  
if(!args[0]) {
  let embed = new Discord.RichEmbed()
   .setColor('#0099ff')
   .setAuthor(`Yardım Komutları`,message.author.avatarURL)
   .addField('📕 | Eğlence Komutları İçin', `**${prefix}yardım eğlence**` , true) 
   .addField('📗 | Genel Komutlar İçin', `**${prefix}yardım genel**` , true) 
   .addField('📘 | Yetkili Komutları İçin', `**${prefix}yardım yetkili**` , true) 
   .addField(`»Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958591) **|**[Discord Davet Linki](https://discord.gg/JXme2W5) `)

   message.channel.send({embed: embed})
   return
}
if (args[0] === 'eğlence') {
  let embed = new Discord.RichEmbed()
  .setColor('#0099ff')
  .setTitle('Eğlence Komutları')
  .setThumbnail(client.user.avatarURL)
  .setDescription(client.commands.filter(c => c.conf.kategori === "eğlence").map(cmd => `\`${cmd.help.name}\` = ${cmd.help.description}`).join("\n"))
  return message.channel.send({embed})
}
if (args[0] === 'genel') {
  let embed = new Discord.RichEmbed()
  .setColor('#0099ff')
  .setTitle('Genel Komutlar')
  .setThumbnail(client.user.avatarURL)
  .setDescription(client.commands.filter(c => c.conf.kategori === "genel").map(cmd => `\`${cmd.help.name}\` = ${cmd.help.description}`).join("\n"))
  return message.channel.send({embed})
}
if (args[0] === 'yetkili') {
  let embed = new Discord.RichEmbed()
  .setColor('#0099ff')
  .setTitle('Yetkili Komutları')
  .setThumbnail(client.user.avatarURL)
  .setDescription(client.commands.filter(c => c.conf.kategori === "yetkili").map(cmd => `\`${cmd.help.name}\` = ${cmd.help.description}`).join("\n"))
  return message.channel.send({embed})
}
if (args[0] === 'yapımcı') {
  let embed = new Discord.RichEmbed()
  .setColor('#0099ff')
  .setTitle('Yapımcı Komutları')
  .setThumbnail(client.user.avatarURL)
  .setDescription(client.commands.filter(c => c.conf.kategori === "yapımcı").map(cmd => `\`${cmd.help.name}\` = ${cmd.help.description}`).join("\n"))
  return message.channel.send({embed})
}

var komut = client.commands.get(args[0]) ? client.commands.get(args[0]) : client.commands.get(client.aliases.get(args[0]))
  
if (args[0]) {
    
    if (client.commands.has(args[0]) ? client.commands.has(args[0]) : client.aliases.has(args[0])) {
      
  var perm = komut.conf.permLevel.toString()
      .replace("0", `Yetki gerekmiyor.`)
      .replace("1", `Mesajları Yönet yetkisi gerekiyor.`)
      .replace("2", `Üyeleri At yetkisi gerekiyor.`)
      .replace("3", `Üyeleri Yasakla yetkisi gerekiyor.`)
      .replace("4", `Yönetici yetkisi gerekiyor.`)
      .replace("5", 'Rolleri Yönet yetkisi gerekiyor.')
      .replace("6", `Bot Yapımcısı yetkisi gerekiyor.`)
      
      const embed = new Discord.RichEmbed()
      .addField("Komut Adı", komut.help.name)
      .addField("Açıklaması", komut.help.description || "Bulunmuyor")
      .addField("Kategorisi", komut.conf.kategori || "Bulunmuyor")
      .addField("Gerekli Yetki", perm || "Bulunmuyor")
      .addField("Doğru Kullanımı", komut.help.usage || "Bulunmuyor")
      .addField("Komutun Diğer Adları", komut.conf.aliases.join(', ') ||"Bulunmuyor")
      .setColor('RONDOM')
       message.channel.send({embed: embed})
      
    } else {
      const embed = new Discord.RichEmbed()
        .setDescription(`Botta ${args[0]} isminde bir komut bulunamadı! Botun tüm komutlarını ${prefix}yardım yazarak görebilirsin!`)
        .setColor('RONDOM')
      message.channel.send({embed: embed})
    }
}
};



exports.conf = {
  enable: true,
  guildOnly: true,
  aliases: ["help", "h", "y"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Tüm komutları listeler.",
  usage: "yardım"
};
const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Kullanım: +sikayet <Şikayet>'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Şikayetiniz Bildirildi!')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının Şikayeti:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Şikayet", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('755788429203210403').send(embed2); 
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0,
  kategori:"genel"
};

exports.help = {
  name: 'şikayet',
  description: 'Bot Hakkında Şikayet de bulunursunuz..',
  usage: 'sikayet <Şikayet>'
};
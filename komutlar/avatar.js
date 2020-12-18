const Discord = require("discord.js");

exports.run = async (client, message, args) => {

let kullanici = message.mentions.users.first();
let kullanici2 = message.mentions.users.first();

if(kullanici) {
  const embed = new Discord.RichEmbed()
  .setColor(client.ayarlar.renk)
  .setImage(kullanici.avatarURL)
  .addField(`${client.user.username} | Avatar Sistemi`, `[Avatarın büyük halini göster!](${kullanici.avatarURL})`, false);
  message.channel.send({embed});
  return;
}
if(!kullanici) {
  const embed = new Discord.RichEmbed()
  .setColor(client.ayarlar.renk)
  .setImage(message.author.avatarURL)
  .addField(`${client.user.username} | Avatar Sistemi`, `[Avatarın büyük halini göster!](${message.author.avatarURL})`, false);
  message.channel.send({embed});
  return;
}
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["avatar","pp",],
  permLevel: 0,
  kategori: 'eğlence'
};

exports.help = {
  name: 'avatar',
  description: 'Etiketlediğiniz kullanıcının yada sizin avatarınızı görüntülersiniz.',
  usage: 'avatar [kullanıcı yada bir şey yazmayın sizin avatarınızı göstersin]'
};
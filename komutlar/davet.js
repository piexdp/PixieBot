const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setColor('#1E90FF')
  .setDescription(`Botumu Davet Etmek İçin Yandaki Linke Tıkla! => [Link](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958591)
Destek Sunucuma Gelmek İçin Yandaki Linke Tıkla => [Link](https://discord.gg/JXme2W5)`)
  
  message.channel.send({embed: embed})
}

 exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["botdavet"],
  permLevel: 0,
  kategori: "yetkili"
};

exports.help = {
  name: "davet",
  description: "Botu sunucunuza davet edersiniz.",
  usage: "davet"
}
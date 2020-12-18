const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    const embed = new Discord.RichEmbed()
   
    .setColor("#36393F")
    .setDescription(`** ${mesaj} **` + ' FBI Open the door !')
    .setImage(`https://media1.tenor.com/images/93d11bc59526ce49f60766f0045d819b/tenor.gif?itemid=11500735 `)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: false,
  guildOnly: true,
  aliases: ["onethedoor",],
  permLevel: 0,
  kategori:"eğlence"
};

exports.help = {
  name: 'fbi',
  description: 'FBI Geldi aç kapıyı',
  usage: 'Fbi <@user>',
};
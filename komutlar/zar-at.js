const Discord = require('discord.js')

exports.run = function(bot, message) {
    message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor(message.guild.me.displayHexColor)
    .setTitle('🎲 Zarın: ' + doMagicDiceVoodoo()));

    function doMagicDiceVoodoo() {
        var rand = ['1', '2', '3', '4', '5', '6'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}

exports.conf = {
  enabled: true,
  aliases: ['zar'],
  guildOnly: false,
  permLevel: 0,
  kategori:"eğlennce"
};

exports.help = {
  name: 'zarat',
  description: 'Zar Atın',
  usage: 'zar'
};
const Discord = require("discord.js");
var Jimp = require('jimp');
module.exports.run = async (bot, message, args) => {

  var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;
  message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`⏲ | Resim işleniyor, lütfen bekleyiniz.`)}}).then(m => m.delete(1500));
        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(295, 295)
            image.greyscale()
            image.gaussian(3)
            Jimp.read("https://cdn.glitch.com/b18a2fa6-68cb-49d5-9818-64c50dd0fdab%2F1.png?1529363616039", (err, avatar) => {
                avatar.resize(295, 295)
                image.composite(avatar, 4, 0).write(`./img/wasted/${bot.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/wasted/${bot.user.id}-${user.id}.png`));
                }, 1000);
          message.channel.stopTyping();
            });
        });
    };
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['wasted',],
 permLevel: 0,
 kategori:"eğlence" 
};
exports.help = {
 name: 'wasted',
 description: 'Profil fotoğrafınıza wasted efekti ekler.',
 usage: 'wasted'
};
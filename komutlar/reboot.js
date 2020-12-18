const Discord = require('discord.js');
const moment = require('moment');

exports.run = (client, message, args) => {
message.channel.sendMessage({embed: {
  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
  description: ('**Botun Yeniden Başlatılmasını Onaylıyor Musun ?**')
 }})

.then(() => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage({embed: {
        color: Math.floor(Math.random() * (0xFFFFFF + 1)),
        description: ('**Yeniden Başlıyorum**')
       }})
      .then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Yeniden Başlatılıyor`)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage({embed: {
        color: Math.floor(Math.random() * (0xFFFFFF + 1)),
        description: ('Yeniden Başlama İşlemini İptal Ettim')
       }});
      
    });
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenile','yb'],
  permLevel: 6,
  kategori:"yapımcı"
};

exports.help = {
  name: 'reboot',
  description: 'Botu Resler',
  usage: 'reboot'
};
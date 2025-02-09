const Discord = require('discord.js');


exports.run = async function(client, message, args) {
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Bu komutu kullanabilmek için (Mesajları Yönet) iznine sahip olmalısın! `)}})
  let abc = args.slice(0).join('')
  if(isNaN(abc)) return message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Lütfen silinecek mesaj miktarını yazın!  Örnek Kullanım ${prefix}temizle 1-400`)}});
  if(!abc) return message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Lütfen silinecek mesaj miktarını yazın!  Örnek Kullanım ${prefix}temizle 1-400`)}});

  if(abc > 1 && abc <= 100) {
    await(message.delete())
    message.channel.bulkDelete(abc).then(() => {
    message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`${abc} adet mesaj silindi! Hadi Gene İyisin :smile: `)}}).then(msg => msg.delete(5000));
    
    })
  } else if(abc > 100 && abc <= 200) {
    await(message.delete())
    message.channel.bulkDelete(100)
    message.channel.bulkDelete(abc-100).then(() => {
    message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`${abc} adet mesaj silindi! Hadi Gene İyisin :smile: `)}}).then(msg => msg.delete(5000));
    })
  } else if(abc > 200 && abc <= 300) {
    await(message.delete())
    message.channel.bulkDelete(100)
    message.channel.bulkDelete(100)
    message.channel.bulkDelete(abc-200).then(() => {
    message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`${abc} adet mesaj silindi! Hadi Gene İyisin :smile: `)}}).then(msg => msg.delete(5000));
    })
  } else if(abc > 300 && abc <= 400) {
    await(message.delete())
    message.channel.bulkDelete(100)
    message.channel.bulkDelete(100)
    message.channel.bulkDelete(100)
    message.channel.bulkDelete(abc-300).then(() => {
    message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`${abc} adet mesaj silindi! Hadi Gene İyisin :smile: `)}}).then(msg => msg.delete(5000));
    })
  } else {
    message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Lütfen 1-400 arası silinecek mesaj miktarı yazın! Doğru Kullanım: ${prefix}temizle 1-400`)}});
   
  }

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['clear', 'sil'], 
  permLevel: 0,
  kategori: 'genel'
};

exports.help = {
  name: 'temizle', 
  description: 'Belirtilen miktarda mesajı siler.', 
  usage: 'temizle <miktar>',
 
};
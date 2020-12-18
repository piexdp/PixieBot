const Discord = require("discord.js");
const fs = require("fs");
const db = require('quick.db')

module.exports.run = async (client, message, args) => {
   
  var prefix ="";
var ayarlar=require('../ayarlar.json');
prefix=db.fetch(`prefix_${message.guild.id}`);
if(!prefix) prefix=ayarlar.prefix;
  
  
  
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Bu Komutu kullanmanız için (Yönetici) yetkisine sahip olmalısınız.`)}})
  


  let d = await db.fetch(`okanal_${message.guild.id}`)
  const sea = message.guild.channels.get(d)
  if (!sea) return message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Oylama kanalı ayarlanmamış. Ayarlamak için ${prefix}oylamakanalı #kanal`)}})
  

    let yazi = args.slice(0).join(' ')
    if (!yazi) return message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Lütfen Oylamada Ne Olacağını Yaz!`)}})
    message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`:white_check_mark: Oylama gönderildi `)}})
   
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField('**Oylama Var!**', `**${yazi}**`)
    .setThumbnail(``)
    .setFooter(`'${message.author.username} oylama yaptı. | ${client.user.username} Oylama Sistemi'`)
    sea.send('||@everyone|| ||@here||',{embed: embed}).then(m => { 
   let re = m.react('✅');
   let ra = m.react('❌');
        
    })
    }

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['oylama-yap', 'oylamayap', 'oylamalar'],
 permLevel: 2,
 kategori: "genel"
};

exports.help = {
 name: 'oylama',
 description: 'Oylama kanalında oylama yapar.',
 usage: 'oylama'
};
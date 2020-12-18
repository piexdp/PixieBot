const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => {
  
  var prefix ="";
var ayarlar=require('../ayarlar.json');
prefix=db.fetch(`prefix_${message.guild.id}`);
if(!prefix) prefix=ayarlar.prefix;
  
  const sayacsayi = await db.fetch(`sayac_${message.guild.id}`);
  const sayackanal = message.mentions.channels.first()
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed: {color: Math.floor(Math.random() * (0xFFFFFF + 1)),description: (`BU komutu kullanabilmek için Yönetici yetkisine sahip olmalısın.`)}});
        
  if(!args[0]) {
    message.channel.send({embed: {color: Math.floor(Math.random() * (0xFFFFFF + 1)),description: (`Yanlış Kullanım Doğru kullanım ${prefix}sayaç <sayı> #kanal`)}})
    return
  }
  
  if(!sayackanal) {
   message.channel.send({embed: {color: Math.floor(Math.random() * (0xFFFFFF + 1)),description: (`Geçerli Bir Kanal Etiketleyiniz`)}})
  }
  
  
  if(args[0] === "kapat") {
    if(!sayacsayi) {
      message.channel.send({embed: {color: Math.floor(Math.random() * (0xFFFFFF + 1)),description: (`Ayarlanmayan şeyi kapatamazsın.`)}})
      return
    }
    
    db.delete(`sayac_${message.guild.id}`)
    db.delete(`sayacK_${message.guild.id}`)
    message.channel.send({embed: {color: Math.floor(Math.random() * (0xFFFFFF + 1)),description: (`Sayaç başarıyla kapatıldı.`)}})
    return
  }
  
  if(isNaN(args[0])) {
    message.channel.send({embed: {color: Math.floor(Math.random() * (0xFFFFFF + 1)),description: (`Bir sayı yazmalısın.`)}})
    return
  }
 
        if(args[0] <= message.guild.members.size) {
                message.channel.send({embed: {color: Math.floor(Math.random() * (0xFFFFFF + 1)),description: (`Sunucudaki kullanıcı sayısından (${message.guild.members.size}) daha yüksek bir değer girmelisin.`)}})
                return
        }
  
  db.set(`sayac_${message.guild.id}`, args[0])
  db.set(`sayacK_${message.guild.id}`, sayackanal.name)
  
  message.channel.send({embed: {color: Math.floor(Math.random() * (0xFFFFFF + 1)),description: (`Sayaç \`${args[0]}\`, sayaç kanalı ${sayackanal} olarak ayarlandı.`)}})
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['sayac'],
        permLevel: 3,
        kategori:"yetkili"
}
 
exports.help = {
        name: 'sayaç',
        description: 'Sayacı ayarlar.',
        usage: 'sayaç <sayı> <#kanal> / sıfırla'
}
const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');




exports.run = (client, message, args) => { 
  
var prefix ="";
var ayarlar=require('../ayarlar.json');
prefix=db.fetch(`prefix_${message.guild.id}`);
if(!prefix) prefix=ayarlar.prefix;
  
const croxy = require("croxy-api")
new croxy("hHKKit3choUqX0UveErEjWqRRMdhUeDezHDbbxA8QC8md28Rn5")

let user=args.slice(0).join("");
if(!user) return message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Bir film adı gir : Örnek Kullanım ${prefix}film <film adı>`)}})
    croxy.film(user).then(data=>{
   
        
     let embed=new Discord.RichEmbed()
              
           .setAuthor(data.isim)
           .addField('Film Adı', data.isim ,true)
           .addField('Yayınlanma Tarihi', data.yayınTarihi ,true)
           .addField('Yönetmen', data.yönetmen,true)
           .addField('IMBB Puanı', data.imdbOy,true)
           .addField('Dil',data.dil,true)
           .addField('Süre',data.süre,true)
           .addField('Oyuncular',data.oyuncular,)
           .setThumbnail(data.afiş)
          message.channel.send(embed)
      
     
  })
  
  
  
  
  };
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['movie',], 
  permLevel: 0,
  kategori:"eğlence"
};

exports.help = {
  name: 'film', 
  description: 'Herhangi Bir Film Bilgilerini Yazar', 
  usage: 'film <filmadı>'
};

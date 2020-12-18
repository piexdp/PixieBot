const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');




exports.run = (client, message, args) => { 
  
    var prefix ="";
var ayarlar=require('../ayarlar.json');
prefix=db.fetch(`prefix_${message.guild.id}`);
if(!prefix) prefix=ayarlar.prefix;
  
  const croxy = require("croxy-api")
new croxy("9ZKQuRDo8enCHCZfUxcjMjVVCkfdw9in0BtdfQJuRoRZd5im8W")
let user=args.slice(0).join("");
if(!user) return message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Bir kullanıcı adı gir : Örnek Kullanım ${prefix}twitter <kullanıcı adı>`)}})
  message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`⏲ | Bilgiler işleniyor, lütfen bekleyiniz.`)}}).then(m => m.delete(1000));
  croxy.twitter(user).then(data=>{
     let embed=new Discord.RichEmbed()
    .setAuthor(data.isim,data.profilFotoğrafı)
    .addField("Tamİsim",data.isim)
    .addField("Biyografi", data.biyografi)
    .addField("Takipçiler",data.takipçi,true)
    .addField("Takip edilen",data.takipEdilen,true)
    .addField("Hesap Durumu ?",data.gizliMi ? "Herkese Kapalı" :"Herkese Açık",true)
    .addField("Tweet Sayısı",data.tweetSayısı,true)
     .addField("Katılma Tarihi ?",data.katılmaTarihi,true)
    .addField("Onaylı mı?",data.doğrulanmışMı ? "Hayır" : "Evet",true)
    .setThumbnail(data.profilFotoğrafı)
    .setColor(client.ayarlar.renk)
    message.channel.send(embed)
  })
  
  
  
  
  };
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['twit',], 
  permLevel: 0,
  kategori:"eğlence"
};

exports.help = {
  name: 'twitter', 
  description: 'Herhangi Bir Kullanıcının Twitter Bilgilerini Yazar', 
  usage: 'twitter'
};

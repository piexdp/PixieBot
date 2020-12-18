const Discord = require("discord.js");
const request=require("request");

  
module.exports.run = async (bot, message, args) => {
  request('https://api-ely.glitch.me/ataturk', function (error, response, body) {
    
          var info = JSON.parse(body);
        const embed = new Discord.RichEmbed()
         .addField(`SAYGIYLA ANIYORUZ`, `Hayatı ve özgürlüğü için ölümü göze alan bir millet asla yenilmez`) //Alt Bilgi
         .setImage(info.ataturk) //Resmi Apiden Çekiyor
         .setColor("RANDOM") //Rengini Ayarlıyor
         .setTitle('🇹🇷 ATAM 🇹🇷') //Başlık
         .setTimestamp()  //Mesajın İstemdigi Zamanı Gosteriyor
         .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL) //Kimin İstedigini Gösteriyor
         message.channel.send(embed);
  });

};

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["atam",],
    permLevel: 0,
    kategori: 'eğlence'
  };

  exports.help = {
    name: 'atatürk',
    description: 'Rastgele ataürk fotoğraflarını ve giflerini atar.',
    usage: 'atatürk'
  };
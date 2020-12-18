const Discord = require('discord.js')
var steam = require('steam-provider')
var provider = new steam.SteamProvider();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    var db=require("quick.db");
    var prefix ="";
    var ayarlar=require('../ayarlar.json');
    prefix=db.fetch(`prefix_${message.guild.id}`);
    if(!prefix) prefix=ayarlar.prefix;
  
    let game = args[0]
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (!game) return message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Lütfen Steamde Olan Bir Oyunun Adını Yazın. Örnek: ${prefix}steam gta5`)}})

    provider.search(game).then(result => {
    provider.detail(result[0].id, "turkey", "tr").then(results => {
    const embed = new Discord.RichEmbed()
    .setAuthor('Steam Mağazası', steampng)
    .setTitle(result[0].name)
    .addField(`Oyunun ID'sı`, result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Türleri', results.genres)
    .addField('Fiyati', `Normal Fiyat **${results.priceData.initialPrice}** TL İndirimli Fiyat **${results.priceData.finalPrice}** TL`, true)
    .addField('Platformlar', results.otherData.platforms, true)
    .addField('Metacritic Puanı', results.otherData.metacriticScore, true)
    .addField('Etiketleri', results.otherData.features, true)
    .addField('Geliştiricileri', results.otherData.developer, true)
    .addField('Yayımcıları', results.otherData.publisher)
    .setColor('RANDOM')
    .setFooter('Steam Mağaza Sistemi')
    message.channel.send(embed).catch(e => {
        console.log(e)
        message.reply({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Hata Olustu Yada  + game +  Adlı Oyun Bulunamadı`)}})
        
    })
})
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  katagori:"kullanıcı"
};

exports.help = {
  name: 'steam',
  description: 'steamden bir oyun hakkında bilgi verir',
  usage: 'steamstore'
};
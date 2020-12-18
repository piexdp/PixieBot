const Discord = require('discord.js')
const fs = require('fs');
const ayarlar = require('../ayarlar.json');
let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog1.json", "utf8"));

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`)}});
  
  let channel = message.mentions.channels.first()
    if (!channel) {
        message.channel.send(``)
        return
    }
    if(!gkanal[message.guild.id]){
        gkanal[message.guild.id] = {
            resim: channel.id
        };
    }
    fs.writeFile("./ayarlar/glog1.json", JSON.stringify(gkanal), (err) => {
        console.log(err)
    })
  
    message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`:white_check_mark:  ${channel} HG-BB Kanal ayarlandı.`)}})
  
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    kategori: "yetkili",
    permLevel: 2,  
}

exports.help = {
    name: 'hgbb',
    description: 'HG-BB Kanalını Ayarlar.',
    usage: 'hgbb <#kanal>'
}
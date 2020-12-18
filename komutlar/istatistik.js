const Discord = require("discord.js");
const moment = require('moment');
const os = require('os');
let cpuStat = require("cpu-stat");
const { stripIndents } = require('common-tags');
require('moment-duration-format');

exports.run = async (client, message, args) => {
  const bot = await client.fetchApplication()

if(client.ayarlar.yardimcilar[0]) {
    var yardimcilar = ''
    for (var i = 0; i < client.ayarlar.yardimcilar.length; i++) {
      var ayarliolanlar = client.users.get(client.ayarlar.yardimcilar[i]).tag;
      if (i === 0) {
        yardimcilar += ayarliolanlar
      }
      else if (i === client.ayarlar.yardimcilar.length - 1) {
        yardimcilar += " ve " + ayarliolanlar;
      } else {
        yardimcilar += ", " + ayarliolanlar
      }
    }
  }

  var m = await message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`İstatistikler hesaplanıyor lütfen bekleyiniz... :page_facing_up: `)}})
  
  var osType = await os.type();

    if (osType === 'Darwin') osType = 'macOS'
    else if (osType === 'Windows') osType = 'Windows'
    else osType = os.type();
  
   
  
    var osBit = await os.arch();
  
    if (osBit === 'x64') osBit = '64 Bit'
    else if (osBit === 'x82') osBit = '32 Bit'
    else osBit = os.arch();
  
    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const uptime = moment.duration(client.uptime).format("D [gün], H [saat], m [dakika], s [saniye]");
      
      setTimeout(() => {
        const s = new Discord.RichEmbed()
        .setColor(client.ayarlar.renk)
        .setAuthor(`${client.user.username} | İstatistikler`, client.user.avatarURL)
        .addField('Geliştirici', `**\`${bot.owner.tag}\`**`,true)
        .addField('Emeği Geçenler', `${yardimcilar || 'Bilinmiyor'}`,true)
        .addField("Çalışma Süresi", `${uptime}`,true)
        .addField("İşletim Sistemi", `${osType} ${osBit}`,true)
        .addField("Bellek Kullanımı", `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()} MB`,true)
        .addField("Versiyonlar", stripIndents`
        **Discord.JS:** v${Discord.version}
        **Node.JS:** ${process.version}
        `,true)
        .addField("İşlemci", `\`\`\`xl\n${os.cpus().map(i => `${i.model}`)[0]}\n\`\`\``)
        .addField("İşlemci Kullanımı", `%${percent.toFixed(2)}`)
        .setThumbnail()
        return m.edit(s)
        
        }, 3000)
        
    });
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["i", "stat", "istatistikler", "stats"],
  permLevel: 0,
  kategori: "genel"
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir..",
  usage: "istatistik"
};
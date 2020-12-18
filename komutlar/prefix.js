const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
if (!message.guild) {
  return message.author.send(`:x: Bu komut özel mesajlarda kullanıma kapatılmıştır.`); }
if (message.author.bot === true) {
  return;
}


  var degisken=args.slice(0).join("");
  if(!degisken) return message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Lütfen bir prefix gir. Örnek Kullaım ${ayarlar.prefix}prefix <prefix>`)}});
  if(degisken==ayarlar.prefix) return message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Botun orjinal prefixini özel prefix olarak ayarlamazsın.`)}});
  if(degisken=="kapat"){
  db.delete(`prefix_${message.guild.id}`)
  message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Prefix eski haline döndü.`)}});
    return;
}
  db.set(`prefix_${message.guild.id}`,degisken)
    message.channel.send({embed:{ color: Math.floor(Math.random() * (0xFFFFFF + 1)), description:(`Prefix başarıyla **${degisken}** olarak ayarlanmıştır.`)}});


      
      
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['prefiks', 'yeniprefix', 'yeni-prefix', 'ön-ek', 'önek', 'prefix-ayarla', 'prefixayarla', 'önekayarla', 'ön-ek-ayarla'],
  permLevel: 2, 
  kategori:"yetkili"
};

exports.help = {
  name: 'prefix',
  description: 'Botun bulunulan sunucuya özel prefix\'ini değiştirirsiniz.',
  usage: 'prefix <prefix>'
};
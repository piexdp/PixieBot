const Discord = require('discord.js');
const covid = require('covidtracker');
const fetch = require('node-fetch');


exports.run = async (client, message, args) => {
    if (!args[0]) {
      const totalStats = await covid.getAll();

      const updatedTime = new Date(totalStats.updated);

      const korona = new Discord.RichEmbed()
        .setAuthor('Coronavirus İstatistikleri',message.author.avatarURL)
        .addField('Onaylanmış Vakalar', `**${totalStats.cases.toLocaleString()}**`, true)
        .addField('Bugünkü Vakalar', `+${totalStats.todayCases.toLocaleString()}`, true)
        .addField('Bugünkü Ölümler', `+${totalStats.todayDeaths.toLocaleString()}`, true)
        .addField('Aktif Hasta Sayısı', `${totalStats.active.toLocaleString()} (${((totalStats.active / totalStats.cases) * 100).toFixed(2)}%)`, true)
        .addField('Kurtulan Hasta Sayısı', `${totalStats.recovered.toLocaleString()} (${((totalStats.recovered / totalStats.cases) * 100).toFixed(2)}%)`, true)
        .addField('Ölen Kişi Sayısı', `${totalStats.deaths.toLocaleString()} (${((totalStats.deaths / totalStats.cases) * 100).toFixed(2)}%)`, true)
        .addField('Test Yapılan Kişi Sayısı', `${totalStats.tests.toLocaleString()}`, true)
        .addField('Mil Başına Vaka', `${totalStats.casesPerOneMillion.toLocaleString()}`, true)
        .addField('Mil Başı Ölüm', `${totalStats.deathsPerOneMillion.toLocaleString()}`, true)
        .setImage('https://xtrading.io/static/layouts/qK98Z47ptC-embed.png?newest=${Date.now()}')
        .setColor('RONDOM')
        .setFooter(`Son güncelleme: ${updatedTime}`);
      message.channel.send(korona);
    }};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["korona,"],
  permLevel: 0,
  kategori:"genel"
 };
 
exports.help = {
  name: 'korona',
  description: 'Dünyadaki Son Korona Durumunu Gösteriri.',
  usage: 'korona'
 };
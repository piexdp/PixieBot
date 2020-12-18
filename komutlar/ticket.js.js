const Discord = require('discord.js');

exports.run = (client, message, args) => {
 message.delete();
    message.guild.createChannel(`Destek-${message.author.username}`, 'text').then(ch => {
        ch.overwritePermissions(message.member.roles.first(),{
            VIEW_CHANNEL: false,
        }).catch()
        message.guild.roles.forEach((role) => {
            if (role.hasPermission("BAN_MEMBERS")) {
                ch.overwritePermissions(role,{
                    VIEW_CHANNEL: true,
                }).catch()
                ch.overwritePermissions(message.author.id,{
                    VIEW_CHANNEL: true,
                }).catch()
            }
        })

        const embed = new Discord.RichEmbed()
        .setTitle(`» Merhaba ${message.author.username} `)
        .setAuthor("» Piex Bot | Destek Sistemi")
        .setDescription("**Destek ekibimiz sizinle ilgilenecektir.\nDestek talebini iptal etmek için [kapat]( ) yazabilirsin!**")
        .setFooter('Piex Bot | Destek Sistemi', client.user.avatarURL)
        .setTimestamp()
        ch.send(embed).catch()
        ch.send("@everyone")
        ch.send("@here")
        ch.send("<@&745569368473337907>")
        ch.awaitMessages((msg)=> {
            if (msg.content === "kapat") {
                ch.send({embed: {
                  color: Math.floor(Math.random() * (0xFFFFFF + 1)),
                  description: (`Talebiniz iptal ediliyor!`)
                 }}).then(()=>{
                    setTimeout(()=> {
                        ch.delete().catch()
                    },1000)
                });
            }
        },{time:86400000})
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['canlıdestek',],
  permLevel: 0,
  kategori: "genel"
};

exports.help = {
  name: 'ticket',
  description: 'Destek talebi açar.',
  usage: 'ticket'
};
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var efkar = ["Eskisi gibi olalım… Ne sen beni tanı ne de ben seni!",
"Kendini kimler için paralıyorsan bil ki; en çok onlara yaranamıyorsun.",
"Sıkıntılar, sevgilinin gönderdiği misafirdir. Gelir ve gider… Önemli olan, gönderenin hatrına o misafire sabredebilmektedir.",
"“Zor, biliyorum. Ama nasipte varsa açılır yollar. İzin ver Allah’ım.",
"Bir insan değer veriyorsa hesap sorar. Değer vermiyorsa, hal hatır bile sormaz!..",
"Özür dilemek birine yanlışlıkla çarptığınızda yapılacak şeydir. Derin yaralar açtığınızda değil.",
"Dertli bir insan için duman dolu bir odaya benzer. Onu dinlemek o odaya bir pencere açmak gibidir.",
"Sıkıntı yok efendiler, dert insana yol gösterir. Hz. Mevlana",
"Hele bir de hasretlik oldu mu serde; Sevdiğin başka yerde, sen başka yerde… Dertli ediyor insanı dertli.",
"Güvensiz kalplerimizi karaktersiz insanlara borçluyuz.",
"İçtiğim sigaranın dumanı bile bazı insanlardan daha temiz…",
"İnsan ulaşamadığı her şeyin delisi, ulaştığı her şeyin nankörüdür…",
"Sabret kardeşim sabret… Çay bile demini almadan içilmiyor.",
"Akşamlar böyle biter. Hep böyle dertli biter.",
"Kim daha fazla insan ise, daha fazla dertli olur.",
"Öyle dertli dertli bakma gören olmaz, kalbinden söyler ama duyan olmaz.",
"Herkesin acısı sevilmediği kadar.",
"Olmuyor diye üzülme. Allah bir kapıyı kaparsa bin kapıyı açar. Hz. Muhammed",
"Sen konuşamasan da ben anlarım. Çünkü senin derdini sevincini en iyi ben tanırım.",
"Her hikaye bitebilir. Ansızın bazen tam alışmışken.",
"Anlamlı Dertli Sözler Kısa",
"Sorun şu ki; İnsanlar artık bir kalbe sahip olduklarını unuttular.",
"O hep iyi olsun diye sen hep dua edersin, o hiç bilmez!",
"Yorgun bir kalbim, bıkkın bir ruhum var. İster misin?",
"Yanıma yaklaşma dertle doluyum, sen de uzaktan sev gitsin beni.",
"Beni yıpratan hayatın kahpeliği değil, insanların sahteliği!",
"Karar veremediğin için suçlamak kaderi, şartları, onu, bunu, şunu.",
"Aklımda öyle biri var ki ne idare edebiliyorum ne de iade.",
"Boşuna mutlu olmaya çalışmayın, çalıştığınız yerden sormuyorlar!",
"Her derdi içinize atarsanız, sonunda ayağa kalkamazsınız!",
"Zaten yorgunum beni daha fazla yoran hiçbir şeye tahammülüm yok!",
"Kaybetmekten korktukların, zaten hiç senin olmamışlardır.",
"Mekân her zaman bulunur da huzur veren insan her zaman bulunmaz.",
"Hala hayattan bir umudum varsa, senin gülüşün sayesinde.",
"Sen de terk edilip ağıladığında. Bomboş bir umuda sarıldığında anlayacaksın.",
"En Dertli Sözler",
"Artık ne kadar belli ettirmek istemesem de yüreğimin yorgunluğu ve yıpranışı, kendini çok belli ettiriyor dosta da düşmana da.",
"Bilir misin ne kötüdür insanın bildiğini anlatamaması. Kelimelerin hep yarım kalması. Ben deyip susması, sen deyip ağılaması.",
"Sırf sevdiklerin gözyaşı dökmesin ya da kırılmasınlar diye sahiplendiğim acır var.",
"Yüreğini, senin değerini bilmeyen biri için kirletmeye değmiyor hayat.",
"Ne imtihanılar misafir ettik hiç hesapta yokken bir bilsen. İyi ki acıları azaltan dualar ezberlemişim çocukken.",
"Gözyaşlılarımı bulutlara saldığımdan beri yağmurlarla ısıtırım gözlerimi. Her gidişinin ardı sıra kara bir bulut sarar gönül penceremi.",
"Ben bütün gerçeklerimi, hayal kurarak kaybettim.",
"Belki de gözlerine baktığımda, kendimi artık orada göremediğimdendir tüm hırçınlığım!",
"Aşk konusunda o kadar çok şanssızım ki; herkese ya büyük ikramiye, ya da teselli ikramiyesi çıkarken bana amorti bile vurmuyor!",
"Yatsan ne olur, gözüne uyku girmedikten sonra!",
"Gidişine değil, yalnızlığıma aramda oluşan dostluğun bozulmasına kahrediyorum. Şimdi hangi yüzle döneceğim ona?",
"Ah sen yok musun sen! Evet yoksun. Benimki de laf işte.",
"Sorun senden mesaj gelmemesi değil, benim hala o mesajı bekliyor olmam!",
"Her iyi niyetimin ardından üzülüyorum mutlaka. Olmuyor insanım işte, duygularıma yeniliyorum.",
"Çorabın lastiğinin sıktığı yerleri kaşımanın bana verdiği mutluluğu, veremeyen insanIar var!",
"Aşk işte! Gider en kral halinle, bir soytarıyı seversin!",
"Olmayacak bir şeyin olmasını beklemek zordur ama, asıl zor oIan o şeyden asIa vazgeçememektir.",
"OnIar bana bekleme dediler, dönmeyecek. Sabretmek dediler, seni mezara götürecek. Sevme dediler, para etmeyecek. Boşverin diyecektim, nefesim yetmedi!",
"Bir başıma olduğum bir yüksekliğin en ucundayım. İnemiyorum, yaşayamıyorum, ölemiyorum!",
"Güz geçti bahar geçti derken, bir gün daha görsek ne aIa. Dünya derdi sarmış dört yanımı, ya$amayı öğrenemedim hala!",
"Üşüyorum, ödünç ver ellerini. Üşüyorum, üstüme ser yüreğini. Sağ yanım dertli, sol yanım ayaz. Sen yine de ßana nasılsın diye sor, kötüysem bile iyi olurum!",
"Bana her şeyi anlat ne varsa aklında, aklından zorun varsa onu da anIat. Bana derdini anIat kim kaldı yanında? Yanında kim olmalıydı aslında?",
"AnIa beni sevgilim. Seni unutmayı her seferinde unutuyorum.",
"Seni özledim demem mi gerekiyor yoksa sen hisseder misin?",
"Kadersizlikten midir nedir bilmiyorum ama ben ne zaman gülmek istesem biri beni ağlatmak için canını dişine takıyor.",
"Öyle insanılar tanıdım ki şu hayatta hevesim değil sevesim kaçtı. Öyle güzel yalanlar duydum ki onardan, övündüğüm sabrım taştı.",
"Dertli insan içi duman dolu bir odaya benzer, Onu dinlemek, o odaya bir pencere açmak gibidir.",
"Derdimi seviyorum. Biliyorum ki derdimi veren de beni seviyor. Seven, sevdiğinin nazını ölçüyor. Sevilen çekmesin de neylesin."
                 ]
         var efkar = efkar[Math.floor(Math.random(1) * efkar.length)]
    const efkarembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Efkarlandınız`, message.author.avatarURL)
    .setTimestamp()
    .setImage('https://media1.tenor.com/images/1ddfb38822ae78ec3e711189e5289d7f/tenor.gif?itemid=8103707')
    .setFooter(`${message.author.username} efkarlandı.`)
    .setDescription(`${efkar}`)
    return message.channel.sendEmbed(efkarembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["efkar",],
  permLevel: 0,
  kategori: 'eğlence'
};

exports.help = {
  name: 'efkar',
  description: 'Efkarlanırsınız',
  usage: 'efkar'
}
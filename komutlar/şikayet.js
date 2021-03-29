let { MessageEmbed } = require("discord.js");

module.exports = {
  name: "şikayet",
  description: "Herhangi bir şikayetinizi destek ekibine bildirir.",
  usage: "şikayet  <şikayet-metni>",

  run: async (app, message, args) => {
    message.delete();
    let guildID = "750759255149379693";
    let channelID = "755434339541581842";
    let reaportMessage = args.join(" ");
    if (!reaportMessage) return message.channel.send("Şikayetini belirt!");
    let reaportMessageEmbed = new MessageEmbed()
      .addField("Şikayet", reaportMessage)
      .addField("Kullanıcı", `${message.author.tag} ID = ${message.author.id}`)
      .addField("Sunucu", message.guild.name)
      .setColor("RED")
      .setFooter("Şikayet Sistemi")
      .setTimestamp()
      .setThumbnail(message.author.displayAvatarURL())
      .setAuthor(app.user.username, app.user.avatarURL());
    message.channel
      .send("Şikayetiniz başarılı bir şekilde gönderilmiştir.")
      .then((msg) => {
        msg.delete({ timeout: 5000 });
      });

    app.guilds.cache
      .get(guildID)
      .channels.cache.get(channelID)
      .send(reaportMessageEmbed);
  },
};

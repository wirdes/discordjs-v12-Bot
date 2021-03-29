let { MessageEmbed } = require("discord.js");

module.exports = {
  name: "sunucu-bilgi",
  description: "Sunucu hakkında bilgi verir.",
  usage: "sunucu-bilgi",

  run: (app, message, args) => {
    let guild = message.guild;

    let sunucuEmbed = new MessageEmbed()
      .setThumbnail(guild.iconURL)
      .setFooter(guild.name)
      .addField("Sunucu İsmi", guild.name)
      .addField("Kuruluş", guild.createdAt)
      .addField("Kurucu", `${guild.owner} / ID = ${guild.ownerID}`)
      .addField("Üye Sayısı", guild.memberCount)
      .setColor("RED")
      .setTimestamp();

    message.channel.send(sunucuEmbed);
  },
};

let { MessageEmbed } = require("discord.js");

module.exports = {
  name: "destek",
  description:
    "Yetkili ile özel oda açılır ve canlı destek alınır.(Lütfen gereksiz kullanmayınız).",
  usage: "destek",

  run: async (client, message, args) => {
    message.delete();

    message.guild.channels
      .create(`destek-${message.author.username}`, {
        type: "text",
        permissionOverwrites: [
          {
            id: message.guild.id,
            deny: ["VIEW_CHANNEL"],
          },
          {
            id: message.author.id,
            allow: ["VIEW_CHANNEL"],
          },
        ],
      })
      .then((ch) => {
        const embed = new MessageEmbed()
          .setTitle(`» Hey ${message.author.username} !`)
          .setAuthor("»  Destek Sistemi")
          .setDescription(
            "**Buradaki destek ekibimiz sizinle ilgilenecektir.\nDestek talebini iptal etmek için !kapat yazabilirsin!**"
          )
          .setFooter("Destek Sistemi", client.user.avatarURL)
          .setTimestamp();
        ch.send(embed).catch();
        ch.send("<@&751165829042667641>");
        ch.awaitMessages(
          (msg) => {
            if (msg.content === "!kapat") {
              ch.send("`Talebiniz iptal ediliyor!`").then(() => {
                setTimeout(() => {
                  ch.delete().catch();
                }, 1000);
              });
            }
          },
          { time: 86400000 }
        );
      });
  },
};

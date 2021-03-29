const Discord = require("discord.js");

module.exports = {
  name: "kanal",
  description: "Kanal oluşturmaya yarar",
  usage: "kanal <kanal_ismi>",

  run: async (app, message, args) => {
    let kanal = args[0];
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("Bunun için gerekli iznin yok");
    if (kanal.length < 1) return message.channel.send("Kanal adı yazınız.");
    message.delete();
    guild.channels
      .create(kanal, {
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
        ch.send("!kapat ile kapatabilirsiniz");
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

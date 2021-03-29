const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "oylama",
  description: "İstenilen konuda oylama başlatır",
  usage: "oylama <metin>",

  run: async (app, message, args) => {
    let x = "";
    args.forEach((element) => (x += " " + element));
    if (!x) return message.reply("Lütfen bir oylama içeriği giriniz");
    const embed = new MessageEmbed()
      .setColor("RANDOM")
      .setAuthor("Commodore 64 Oylama sistemi")
      .addField(x, "Aşağıdan oy kullanabilirsiniz.");
    let msg = await message.channel.send(embed).then(function (msg) {
      msg.react("✅");
      msg.react("❌");
    });
  },
};

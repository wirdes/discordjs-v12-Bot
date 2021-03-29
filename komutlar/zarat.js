const Discord = require("discord.js");

module.exports = {
  name: "zarat",
  description: "İstenilen sayi aralığında zar atar",
  usage: "zarat <sayı>",

  run: async (app, message, args) => {
    if (isNaN(args[0]) || parseInt(args[0]) <= 0)
      return message.channel.send("Miktarı belirt.");
    if (isNaN(args[0]) || parseInt(args[0]) <= 1)
      return message.channel.send("lütfen zar miktarı olarak 1 girmeyiniz");

    let miktar;

    if (parseInt(args[0]) > 100) {
      miktar = 100;
    } else {
      miktar = parseInt(args[0]);
    }
    let zar = Math.floor(Math.random() * miktar);

    zar = zar + 1;

    message.channel.send(message.author.toString() + " 🎲Zarın: " + zar);
  },
  
};

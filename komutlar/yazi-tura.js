const Discord = require("discord.js");

var hd = ["Tura", "Yazı"];

module.exports = {
  name: "yazıtura",
  description: "Yazı Tura atar.",
  usage: "yazıtura",

  run: async (app, message, args) => {
    message.channel.send(
      message.author.toString() +
        " Para Döndü: " +
        hd[Math.floor(Math.random() * hd.length)]
    );
  },
};

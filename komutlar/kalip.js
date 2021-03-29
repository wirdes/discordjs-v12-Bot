const Discord = require("discord.js");
module.exports.help = {
  name: "avatar",
  description: "show the avatar of a user",
  usage: "[@user]",
};
module.exports = {
  name: "test",
  description: "test kodu",
  usage: "test",

  run: async (client, message, args) => {
    console.log(this.help.description);
  },
};

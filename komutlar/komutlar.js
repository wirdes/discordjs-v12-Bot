const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
  name: "komutlar",
  description: "Botumuzdaki komutları listeler",
  usage: "komutlar",
  run: (client, message, args) => {
    let jsfiles = readdirSync(`./komutlar/`).filter((file) =>
      file.endsWith(".js")
    );
    if (jsfiles.length <= 0) {
      message.channel.send("Malesef hiç komut bulunmuyor");
      return;
    }

    let help = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("KOMUTLAR")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(
        `© ${message.guild.me.displayName}`,
        client.user.displayAvatarURL()
      );
    if (!args[0]) {
      let result = jsfiles.forEach((f, i) => {
        let props = require(`./${f}`);
        let filesArray = [props.name, props.description, props.usage];
        help.addField(
          `!${filesArray[0]} : ${filesArray[1]}.`,
          ` Kullanımı: ${filesArray[2]}`
        );
      });
      return message.channel.send(help);
    }
  },
};

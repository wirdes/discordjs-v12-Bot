module.exports = {
  name: "temizle",
  description: "İstenilen kadar mesajı siler(Sadece yetkililer kullanabilir.)",
  usage: "temizle <sayı>",

  run: async (app, message, args) => {
    if (message.deletable) {
      message.delete();
    }

    if (isNaN(args[0]) || parseInt(args[0]) <= 0)
      return message.channel.send("Miktarı belirt.");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("Sadece Yetkililer bu komutu kullanabilir");

    let deleteAmount;

    if (parseInt(args[0]) > 100) {
      deleteAmount = 100;
    } else {
      deleteAmount = parseInt(args[0]);
    }

    message.channel
      .bulkDelete(deleteAmount + 1, true)
      .then((deleted) =>
        message.channel.send(` \`${deleted.size - 1}\` tane  mesaj silindi.`)
      )
      .then((msg) => {
        msg.delete({ timeout: 3000 });
      })
      .catch(console.error);
  },
};

module.exports = {
  name: "eglence",
  description: "size eğlence rolu verir",
  usage: "eglence",

  run: (app, message) => {
    let epicRole = message.guild.roles.cache.get("756288958228594789");
    message.member.roles.add(epicRole);
    message.channel.send("Rolünüz başarıyla verilmiştir.İyi eğlenceler..");
  },
};

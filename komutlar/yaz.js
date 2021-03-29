module.exports = {
  name: "yaz",
  description: "Bot istenilen metin yazar(Sadece yetkililer kullanabilir.)",
  usage: "yaz <metin>",

  run: (app, message, args) => {
    message.delete();
    if (!message.member.roles.cache.has("751165829042667641"))
      return message.channel.send("Sadece Yetkililer bu komutu kullanabilir");
    //if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Sadece Yetkililer bu komutu kullanabilir');
    let say = args.join(" "); // !say Selam dostlar!
    if (!say) return message.channel.send("Cümleyi belirt.");
    message.channel.send(say);
  },
};

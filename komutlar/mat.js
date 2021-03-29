module.exports = {
  name: "mat",
  description: "İstenilen matematik işlemini yapar",
  usage: "mat 2+2",

  run: async (app, message, args) => {
    let soru = args[0];
    if (!soru)
      return message.reply(
        " Lütfen bir işlem yazın. Örnek: ``!!matematik 16*40``"
      );
    else {
      let cevap;
      try {
        cevap = eval(soru);
      } catch (err) {
        if (
          message.channel.send(
            " Hatalı işlem: " +
              "Lütfen çarpma işlemi yaparken `x` yerine ` * ` kullanın." +
              "\n"
          )
        ) {
          return;
        }
      }
      message.channel.send(`\nİşlem : \`${soru}\`\nCevap: \`${cevap}\``);
    }
  },
};

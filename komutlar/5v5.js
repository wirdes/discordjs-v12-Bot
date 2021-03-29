const Discord = require("discord.js");
const ascii = require("ascii-table");

module.exports = {
  name: "5v5",
  description: "5v5 takımları oluşturuyor",
  usage: "5v5 (zorunlu vaterant sayisi) (zorunlu takim kişileri) sonra isimler",

  run: async (client, message, args) => {
    let map = ["BİND", "İCEBOX", "HAVEN", "ASCENT", "SPLİT"];
    let table = new ascii(
      "5V5 Map:" + map[Math.floor(Math.random() * map.length)]
    );
    let takim = ["SALDIRI", "SAVUNMA"];

    function karistir(dizi) {
      for (let i = dizi.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [dizi[i], dizi[j]] = [dizi[j], dizi[i]];
      }
    }
    let takim1 = [];
    let takim2 = [];
    let ct = Number(args[0]);
    if (ct % 2 != 0)
      return message.reply("Lütfen Veterant sayısını çift giriniz");
    args.splice(0, 1);
    for (let a = 0; a < ct / 2; a++) {
      let sayi = Math.floor(Math.random() * 2);
      if (a % 2 == sayi) {
        takim1.push(args[0]);
        args.splice(0, 1);
        takim2.push(args[0]);
        args.splice(0, 1);
      } else {
        takim2.push(args[0]);
        args.splice(0, 1);
        takim1.push(args[0]);
        args.splice(0, 1);
      }
    }
    karistir(args);
    karistir(takim);

    for (let j = 0; j < args.length; j++) {
      if (j < (10 - ct) / 2) {
        takim1.push(args[j]);
      } else {
        takim2.push(args[j]);
      }
    }
    table.setAlign(20, ascii.CENTER);
    table.setTitleAlignCenter();
    table.setHeading(takim[0], takim[1]);
    table.addRow(takim1[0], takim2[0]);
    table.addRow(takim1[1], takim2[1]);
    table.addRow(takim1[2], takim2[2]);
    table.addRow(takim1[3], takim2[3]);
    table.addRow(takim1[4], takim2[4]);

    message.channel.send("`" + table.toString() + "`");
    table.clear();
  },
};

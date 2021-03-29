const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const ReactionRole = require("reaction-role");
const bList = require("./blacklist.json");
const app = new Client({
  disableEveryone: true,
});


require("./util/eventLoader")(app);
app.commands = new Collection();
app.aliases = new Collection();

config({
  path: __dirname + "/.env",
});

["command"].forEach((handler) => {
  require(`./handlers/${handler}`)(app);
});

app.on("message", (message) => {
  let blackList = bList.blackList;
  if (message.author.bot) return;
  let kelimeDizisi = message.content.split(" ");
  for (var i = 0; i < blackList.length; i++) {
    if (kelimeDizisi.includes(blackList[i])) {
      try {
        if (message.member.roles.cache.has("751165829042667641")) return;// Moderator role id 
      } catch (err) {
        let a = "Hata var";
        console.log(a);
      }
      message.delete();
      message.reply("Küfür yasak arkadaşım, Dikkat et!!😡");
      break;
    }
  }
});

// Reaction Role Begin

const system = new ReactionRole(process.env.TOKEN);

let option1 = system.createOption(
  "python:752254858299572324", // emoji id 
  "750799995594211400"  // role id 
); //py750799995594211400
let option2 = system.createOption(
  "java312:752254818055356536",
  "750773817571541064"
); //java
let option3 = system.createOption(
  "ruby:752255010817179795",
  "752243454897291264"
); //ruby
let option4 = system.createOption(
  "cpp2:753326023235469372",
  "753316759901306891"
); //c
let option5 = system.createOption(
  "unity:752255823232893018",
  "751158005197701213"
); //unity
let option6 = system.createOption(
  "web:752255564783812721",
  "750800685057966250"
); //web
let option7 = system.createOption(
  "js:752254843996995595",
  "750800278961258497"
); //js
let option8 = system.createOption(
  "cyber:753692782106902669",
  "753691566325104680"
); //cyber
system.createMessage(
  "755206729825779743",
  "752928718141522022",
  17,
  null,
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  option8
); //programlama rol
system.init();

// Reaction Role End

app.login(process.env.TOKEN);

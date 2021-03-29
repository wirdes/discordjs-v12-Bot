const { config } = require("dotenv");
config({
  path: __dirname + "/.env",
});
let prefix = process.env.PREFIX;

module.exports = (app) => {
  console.log(`${app.user.username} aktif!`);
  console.log(
    `${app.users.cache.size} kullanıcı, ${app.guilds.cache.size} sunucu.`
  );

  app.user.setActivity(`${prefix}komutlar`);
};

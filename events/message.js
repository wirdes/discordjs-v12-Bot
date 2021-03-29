const { config } = require("dotenv");
config({
  path: __dirname + "/.env",
});

module.exports = async (message) => {
  let prefix = process.env.PREFIX;
  let app = message.client;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  let command = app.commands.get(cmd);

  if (!command) command = app.commands.get(app.aliases.get(cmd));
  if (command) command.run(app, message, args);
};

module.exports = {
  name: "ping",
  description: "Ping ölçer",
  usage: "ping",
  run: async (client, message, args) => {
    const msg = await message.channel.send(`🏓 Pinging....`);

    msg.edit(`🏓 Pong! Pingin şuan  ${Math.floor(
      msg.createdTimestamp - message.createdTimestamp
    )}ms
        `);
  },
};

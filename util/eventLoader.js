const reqEvent = (event) => require(`../events/${event}`);
module.exports = (app) => {
  app.on("ready", () => reqEvent("ready")(app));
  app.on("message", reqEvent("message"));
};

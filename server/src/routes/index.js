const rootRouter = require("./root");
const businessRouter = require("./business");

module.exports = server => {
  server.use("/", rootRouter);
  server.use("/b", businessRouter);
};

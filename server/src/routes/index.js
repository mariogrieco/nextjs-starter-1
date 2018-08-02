const rootRouter = require("./root");

module.exports = server => {
  server.use("/", rootRouter);
};

const rootRouter = require("./root");
const bussinessRouter = require("./bussiness");

module.exports = server => {
  server.use("/", rootRouter);
  server.use("/bussiness", bussinessRouter);
};

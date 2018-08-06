const rootRouter = require("./root");
const business = require("./business");
const blog = require("./blog");

module.exports = server => {
  server.use("/", rootRouter);
  server.use("/business", business);
  server.use("/blog", blog);
};

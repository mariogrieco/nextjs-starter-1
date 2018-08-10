const getFileName = file => file.replace(/\.[^/.]+$/, "");

module.exports = server => {
  server.use("/", require("./root"));
  require("fs")
    .readdirSync(require("path").join(__dirname))
    .forEach(file => {
      if (file !== "index.js" && file !== "root.js") {
        server.use(`/${getFileName(file)}`, require(`./${file}`));
      }
    });
};

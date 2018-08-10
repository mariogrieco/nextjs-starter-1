require("fs")
  .readdirSync(require("path").join(__dirname))
  .forEach(file => require("./" + file));

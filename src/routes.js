const routes = require("next-routes");

module.exports = routes()
  .add("login")
  .add("signup")
  .add("businesses")
  .add("businessCreate", "business/create");

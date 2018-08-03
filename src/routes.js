const routes = require("next-routes");

module.exports = routes()
  .add("login")
  .add("signup")
  .add("businesses")
  .add("business/create")
  .add("business/detail", "/business/detail/:_id");

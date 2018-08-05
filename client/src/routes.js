const routes = require("next-routes");

const obj = routes()
  .add("login")
  .add("signup")
  .add("business")
  .add("business/create")
  .add("business/update", "/business/update/:_id")
  .add("business/detail", "/business/detail/:_id");

module.exports = Object.assign(obj, {
  goto: (url, params) => () => obj.Router.pushRoute(url, params)
});

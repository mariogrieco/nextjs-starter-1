const routes = require("next-routes");

const obj = routes()
  .add("login")
  .add("signup")
  .add("business")
  .add("business/create")
  .add("business/update", "/business/update/:_id")
  .add("business/show", "/business/show/:_id")
  .add("blog")
  .add("blog/create")
  .add("blog/update", "/blog/update/:_id")
  .add("blog/show", "/blog/show/:_id");

module.exports = Object.assign(obj, {
  goto: (url, params) => () => obj.Router.pushRoute(url, params)
});

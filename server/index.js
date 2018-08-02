const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/businesslisting");

require("./src/models");

const clientRoutes = require("../src/routes");
const serverRoutes = require("./src/routes");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handler = clientRoutes.getRequestHandler(app);

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    secret: "secret"
  })
);

app.prepare().then(() => {
  serverRoutes(server);
  server.use(handler);

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

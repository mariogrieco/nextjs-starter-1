const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/businesslisting");

require("./models");

const routes = require("./routes");

const port = parseInt(process.env.PORT, 10) || 8080;

const server = express();

server.use(cors({ credentials: true, origin: "http://localhost:3000" }));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    secret: "secret"
  })
);
routes(server);

server.listen(port, err => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});
const config = require("../config");

const express = require("express");
const next = require("next");
const helmet = require("helmet");

const routes = require("./routes");

const port = parseInt(config.port);

const dev = config.env !== "production";
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.use(helmet());
  server.get("*", (req, res) => handle(req, res));
  server.listen(port, err => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`> ready on http://localhost:${port}`);
  });
});

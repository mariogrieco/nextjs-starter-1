const express = require("express");
const next = require("next");

const routes = require("./routes");

const port = parseInt(process.env.PORT, 10) || 3000;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.get("*", (req, res) => handle(req, res));
  server.listen(port, err => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`> ready on http://localhost:${port}`);
  });
});

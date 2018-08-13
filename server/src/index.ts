import config from "../config";

import app from "./app";

import mongoose from "./utils/mongoose";
mongoose.connect();

require("./models");

const routes = require("./routes");

const port = parseInt(config.port);

routes(app);

app.listen(port, err => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});

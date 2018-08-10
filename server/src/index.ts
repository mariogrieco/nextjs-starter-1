require("dotenv").config();

import app from "./app";

import mongoose from "./utils/mongoose";
mongoose.connect();

require("./models");

const routes = require("./routes");

const port = parseInt(process.env.PORT, 10) || 8080;

routes(app);

app.listen(port, err => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});

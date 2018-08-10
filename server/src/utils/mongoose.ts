const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const options = {
  reconnectTries: 30, // Retry up to 30 times
  reconnectInterval: 500 // Reconnect every 500ms
};

const connectWithRetry = () => {
  // eslint-disable-next-line no-console
  console.log("MongoDB connection with retry");
  console.log(process.env.MONGODB_URL);
  mongoose
    .connect(
      process.env.MONGODB_URL,
      options
    )
    .then(() => {
      // eslint-disable-next-line no-console
      console.log("MongoDB is connected");
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.log("MongoDB connection unsuccessful, retry after 5 seconds.");
      setTimeout(connectWithRetry, 5000);
    });
};

// eslint-disable-next-line no-console
mongoose.connection.on("connected", () => console.log("MongoDB is connected"));

const connect = () => connectWithRetry();

export default { connect };

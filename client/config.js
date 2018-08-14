require("dotenv").config();
const convict = require("convict");

const config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "dev", "test"],
    default: "dev",
    env: "NODE_ENV"
  },
  port: {
    format: "String",
    default: "3000",
    env: "PORT"
  },
  clientRender: {
    apiUrl: {
      format: String,
      default: "http://localhost:8080",
      env: "CLIENT_RENDER_API_URL"
    }
  },
  serverRender: {
    apiUrl: {
      format: String,
      default: "http://localhost:8080",
      env: "SERVER_RENDER_API_URL"
    }
  }
});

// const env = config.get('env');

// config.loadFile(`./config/${env}.json`);

config.validate({ allowed: "strict" }); // throws error if config does not conform to schema

module.exports = config.getProperties();

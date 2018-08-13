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
    default: "8080",
    env: "PORT"
  },
  cors: {
    origin: {
      format: String,
      default: "http://localhost:3000",
      env: "CORS_ORIGIN"
    }
  },
  mongodb: {
    url: {
      format: String,
      default: "mongodb://localhost:27017/nextjs-starter",
      env: "MONGODB_URL"
    }
  },
  session: {
    secret: {
      format: String,
      default: "secret",
      env: "SESSION_SECRET"
    }
  },
  jwt: {
    secret: {
      format: String,
      default: "secret",
      env: "JWT_SECRET"
    }
  }
});

// const env = config.get('env');

// config.loadFile(`./config/${env}.json`);

config.validate({ allowed: "strict" }); // throws error if config does not conform to schema

export default config.getProperties();

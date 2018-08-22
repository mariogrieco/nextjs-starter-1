import config from "../config";

import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as cookieSession from "cookie-session";
import * as helmet from "helmet";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(helmet());
    this.app.use(cors({ credentials: true, origin: config.cors.origin }));
    this.app.use(
      cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        secret: config.session.secret
      })
    );
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;

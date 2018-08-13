import config from "../../config";

import * as express from "express";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

import User from "../models/user";

const router = express.Router();

interface MyRequest extends express.Request {
  session: any;
}

router.post("/signup", async (req: MyRequest, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(500).send({ error: "email already exists" });
  } else {
    try {
      const user = new User({
        email,
        password
      });

      user.save();

      const token = jwt.sign(
        {
          _id: user._id,
          email: user.email
        },
        config.jwt.secret,
        {
          expiresIn: "7d"
        }
      );

      req.session.userToken = token;
      return res.json({
        _id: user._id,
        email: user.email
      });
    } catch (error) {
      return res.status(500).send({ error: "signup: something blew up" });
    }
  }
});

router.post("/login", async (req: MyRequest, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  try {
    if (!user) return res.status(500).send({ error: "User not found" });

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) return res.status(500).send({ error: "Invalid password" });

    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email
      },
      config.jwt.secret,
      {
        expiresIn: "7d"
      }
    );

    req.session.userToken = token;
    return res.json({
      _id: user._id,
      email: user.email
    });
  } catch (error) {
    return res.status(500).send({ error: "login: something blew up" });
  }
});

router.post("/signout", async (req: MyRequest, res) => {
  req.session.userToken = null;
  res.end();
});

router.post("/isLoggedIn", async (req: MyRequest, res) => {
  try {
    const { userToken } = req.session;
    if (userToken) {
      const decoded = jwt.verify(userToken, config.jwt.secret);
      return res.json({
        isLoggedIn: true,
        user: { _id: (<any>decoded)._id, email: (<any>decoded).email }
      });
    } else {
      return res.json({ isLoggedIn: false });
    }
  } catch (error) {
    return res.json({ isLoggedIn: false });
  }
});

module.exports = router;

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();

router.post("/signup", async (req, res) => {
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
        process.env.JWT_SECRET,
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

router.post("/login", async (req, res) => {
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
      process.env.JWT_SECRET,
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

router.post("/signout", async (req, res) => {
  req.session.userToken = null;
  res.end();
});

router.post("/isLoggedIn", async (req, res) => {
  try {
    const { userToken } = req.session;
    if (userToken) {
      const { _id, email } = jwt.verify(userToken, process.env.JWT_SECRET);
      return res.json({ isLoggedIn: true, user: { _id, email } });
    } else {
      return res.json({ isLoggedIn: false });
    }
  } catch (error) {
    return res.json({ isLoggedIn: false });
  }
});

module.exports = router;

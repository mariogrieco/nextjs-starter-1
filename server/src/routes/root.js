const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    res.status(500).send({ error: "email already exists" });
  } else {
    try {
      const user = new User({
        email,
        password
      });

      user.save();

      const token = jwt.sign(
        {
          userId: user._id
        },
        "secret",
        {
          expiresIn: "7d"
        }
      );

      req.session.userToken = token;
      res.json(user);
    } catch (error) {
      res.status(500).send({ error: "something blew up" });
    }
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  try {
    if (!user) res.status(500).send({ error: "User not found" });

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) res.status(500).send({ error: "Invalid password" });

    const token = jwt.sign(
      {
        userId: user._id
      },
      "secret",
      {
        expiresIn: "7d"
      }
    );

    req.session.userToken = token;
    res.json(user);
  } catch (error) {
    res.status(500).send({ error: "something blew up" });
  }
});

router.post("/signout", async (req, res) => {
  req.session.userToken = null;
  res.end();
});

module.exports = router;

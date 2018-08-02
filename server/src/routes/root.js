const express = require("express");

const router = express.Router();

router.post("/signup", async (req, res) => {
  res.send("home page!");
});

module.exports = router;

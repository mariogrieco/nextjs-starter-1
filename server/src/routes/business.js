const express = require("express");

const Business = require("../models/business");

const router = express.Router();

router.post("/create", async (req, res) => {
  const { name, description } = req.body;
  try {
    const business = new Business({
      name,
      description
    });

    business.save();

    return res.json({
      _id: business._id,
      name: business.name,
      description: business.description
    });
  } catch (error) {
    return res.status(500).send({ error: "create: something blew up" });
  }
});

module.exports = router;

const express = require("express");

const Business = require("../models/business");

const { getUserId } = require("../utils");

const router = express.Router();

router.post("/create", async (req, res) => {
  const { name, description } = req.body;
  const userId = getUserId(req);
  try {
    const business = new Business({
      userId,
      name,
      description
    });

    business.save();

    return res.json({
      _id: business._id,
      userId: business.userId,
      name: business.name,
      description: business.description
    });
  } catch (error) {
    return res.status(500).send({ error: "create: something blew up" });
  }
});

router.get("/getBusinesses", async (req, res) => {
  const userId = getUserId(req);
  try {
    const businesses = await Business.find({ userId });
    return res.json({
      businesses
    });
  } catch (error) {
    return res.status(500).send({ error: "create: something blew up" });
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const business = await Business.findOne({
      _id: req.params._id
    });
    return res.json({
      business
    });
  } catch (error) {
    return res.status(500).send({ error: "create: something blew up" });
  }
});

router.post("/update", async (req, res) => {
  const { _id, name, description } = req.body;
  try {
    await Business.findOneAndUpdate(
      {
        _id
      },
      {
        name,
        description
      }
    );
    res.end();
  } catch (error) {
    return res.status(500).send({ error: "create: something blew up" });
  }
});

router.post("/delete", async (req, res) => {
  const { _id } = req.body;
  try {
    await Business.findOneAndDelete({
      _id
    });
    res.end();
  } catch (error) {
    return res.status(500).send({ error: "create: something blew up" });
  }
});

module.exports = router;

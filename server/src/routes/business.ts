import * as express from "express";

import Business from "../models/business";

import { getUserId } from "../utils";

const router = express.Router();

const PAGE_SIZE = 5;

router.get("/", async (req, res) => {
  const { page } = req.query;
  const userId = getUserId(req);
  try {
    const total = await Business.find().count();
    const businesses = await Business.find({ userId })
      .skip(PAGE_SIZE * (page - 1))
      .limit(PAGE_SIZE);
    return res.json({
      businesses,
      total
    });
  } catch (error) {
    return res.status(500).send({ error: "create: something blew up" });
  }
});

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

    const total = await Business.find().count();

    return res.json({
      page: Math.ceil(total / PAGE_SIZE) || 1
    });
  } catch (error) {
    return res.status(500).send({ error: "create: something blew up" });
  }
});

module.exports = router;

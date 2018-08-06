const express = require("express");
const Blog = require("../models/blog");

const { getUserId } = require("../utils");

const router = express.Router();

router.post("/create", async (req, res) => {
  const { name, description } = req.body;
  const userId = getUserId(req);
  try {
    const blog = new Blog({
      userId,
      name,
      description
    });

    blog.save();

    return res.json({
      _id: blog._id,
      userId: blog.userId,
      name: blog.name,
      description: blog.description
    });
  } catch (error) {
    return res.status(500).send({ error: "create: something blew up" });
  }
});

router.get("/getBlogs", async (req, res) => {
  const userId = getUserId(req);
  try {
    const blogs = await Blog.find({ userId });
    return res.json({
      blogs
    });
  } catch (error) {
    return res.status(500).send({ error: "create: something blew up" });
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const blog = await Blog.findOne({
      _id: req.params._id
    });
    return res.json({
      blog
    });
  } catch (error) {
    return res.status(500).send({ error: "create: something blew up" });
  }
});

router.post("/update", async (req, res) => {
  const { _id, name, description } = req.body;
  try {
    await Blog.findOneAndUpdate(
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
    await Blog.findOneAndDelete({
      _id
    });
    res.end();
  } catch (error) {
    return res.status(500).send({ error: "create: something blew up" });
  }
});

module.exports = router;

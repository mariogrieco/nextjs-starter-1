const { capitalizeFirstLetter } = require("../utils");

module.exports = featureName => {
  const Model = capitalizeFirstLetter(featureName);

  return `const express = require("express");
const ${Model} = require("../models/${featureName}");

const { getUserId } = require("../utils");

const router = express.Router();

router.post("/create", async (req, res) => {
  const { name, description } = req.body;
  const userId = getUserId(req);
  try {
    const ${featureName} = new ${Model}({
      userId,
      name,
      description
    });

    ${featureName}.save();

    return res.json({
      _id: ${featureName}._id,
      userId: ${featureName}.userId,
      name: ${featureName}.name,
      description: ${featureName}.description
    });
  } catch (error) {
    return res.status(500).send({ error: "create: something blew up" });
  }
});

router.get("/get${Model}s", async (req, res) => {
  const userId = getUserId(req);
  try {
    const ${featureName}s = await ${Model}.find({ userId });
    return res.json({
      ${featureName}s
    });
  } catch (error) {
    return res.status(500).send({ error: "create: something blew up" });
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const ${featureName} = await ${Model}.findOne({
      _id: req.params._id
    });
    return res.json({
      ${featureName}
    });
  } catch (error) {
    return res.status(500).send({ error: "create: something blew up" });
  }
});

router.post("/update", async (req, res) => {
  const { _id, name, description } = req.body;
  try {
    await ${Model}.findOneAndUpdate(
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
    await ${Model}.findOneAndDelete({
      _id
    });
    res.end();
  } catch (error) {
    return res.status(500).send({ error: "create: something blew up" });
  }
});

module.exports = router;  
  `;
};

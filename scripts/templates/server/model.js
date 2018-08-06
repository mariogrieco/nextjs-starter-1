const { capitalizeFirstLetter } = require("../utils");

module.exports = featureName => {
  const Model = capitalizeFirstLetter(featureName);

  return `const mongoose = require("mongoose");

const { Schema } = mongoose;

const ${Model}Schema = new Schema({
  name: { type: String },
  userId: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("${Model}", ${Model}Schema);
  `;
};

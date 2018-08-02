const mongoose = require("mongoose");

const { Schema } = mongoose;

const BusinessSchema = new Schema({
  name: { type: String },
  description: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Business", BusinessSchema);

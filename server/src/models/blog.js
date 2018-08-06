const mongoose = require("mongoose");

const { Schema } = mongoose;

const BlogSchema = new Schema({
  name: { type: String },
  userId: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Blog", BlogSchema);

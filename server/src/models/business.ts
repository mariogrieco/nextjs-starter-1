import * as mongoose from "mongoose";

const { Schema } = mongoose;

const BusinessSchema = new Schema({
  name: { type: String },
  userId: { type: String },
  description: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Business", BusinessSchema);

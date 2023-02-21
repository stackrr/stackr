const mongoose = require("mongoose");

const { Schema } = mongoose;

// need to add tech type
const cardSchema = new Schema({
  name: String,
  type: String,
  description: String,
  monthlyDownloads: Number,
  features: [],
  pros: [],
  cons: [],
});

const Card = mongoose.model("card", cardSchema);

module.exports = { Card };

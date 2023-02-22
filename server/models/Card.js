const mongoose = require("mongoose");

const { Schema } = mongoose;

// schema for our card display
const cardSchema = new Schema({
  name: String,
  type: String,
  description: String,
  gitHubStars: Number,
  pros: [],
  cons: [],
  links: [],
});

const Card = mongoose.model("card", cardSchema);

module.exports = { Card };

const mongoose = require("mongoose");

const cardData = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const cards = [
  {
    name: "Random Tech Name 1",
    pros: "very fast",
    cons: "memory heavy",
  },
  {
    name: "Random Tech Name 2",
    pros: "even faster",
    cons: "too much memory use",
  },
  {
    name: "Random Tech Name 3",
    pros: "very very fast",
    cons: "way too much memory use",
  },
];

module.exports = cards;

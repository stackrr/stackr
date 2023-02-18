const { Stack } = require("../models/stackModel");

const dbController = {};

dbController.getTech = async (req, res, next) => {
  try {
    const cards = await Stack.find();
    console.log(cards);
    res.locals.cards = cards;
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = dbController;

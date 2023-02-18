const { Stack } = require("../models/stackModel");

const dbController = {};

dbController.getTech = async (req, res, next) => {
  try {
    // grab data from db
    // add error handler?
    const cards = await Stack.find();

    // store data in the res.locals
    res.locals.cards = cards;
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = dbController;

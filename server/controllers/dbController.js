const { Card } = require("../models/Card");

const dbController = {};

// eslint-disable-next-line consistent-return
dbController.getTech = async (req, res, next) => {
  try {
    // grab data from db
    const cards = await Card.find();

    // error handler if query fails
    // if (!cards) {
    //   return next(console.log("No cards found."));
    // }

    console.log("cards", cards);

    // store data in the res.locals
    res.locals.cards = cards;
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = dbController;

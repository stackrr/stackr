const express = require("express");
const mongoose = require("mongoose");
const { Card } = require("./models/Card");
const cards = require("./data");
const dbController = require("./controllers/dbController");

const app = express();
const PORT = 4000;

const MONGO_URI =
  "mongodb+srv://stackr:stackr@stackr.jsae8zi.mongodb.net/?retryWrites=true&w=majority";

// CONNECTING MONGODB
mongoose.set("strictQuery", true);
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "technologies",
  })
  .then(() => {
    /* ADD DATA ONE TIME */
    // Card.insertMany(cards);
    console.log("Connected to Mongo DB.");
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GRABBING DATA TO RENDER ON FRONTEND
app.get("/api", dbController.getTech, (req, res) => {
  res.status(200).json(res.locals.cards);
});

// ERROR HANDLERS
app.use((req, res) => res.status(404).send("Page not found"));

app.use((err, req, res) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;

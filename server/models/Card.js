const mongoose = require("mongoose");
const cards = require("../data");

//--------------------CREATING SCHEMA--------------------------
const { Schema } = mongoose;

// schema for our card display
const cardSchema = new Schema({
  name: String,
  type: String,
  description: String,
  gitHubStars: Number,
  packageName: String,
  pros: [],
  cons: [],
  links: [],
});
const bundlerSchema = new Schema({
  name: String,
  description: String,
  gitHubStars: Number,
  packageName: String,
  pros: [],
  cons: [],
  links: [],
});
const databaseSchema = new Schema({
  name: String,
  description: String,
  gitHubStars: Number,
  packageName: String,
  pros: [],
  cons: [],
  links: [],
});
const serverSchema = new Schema({
  name: String,
  description: String,
  gitHubStars: Number,
  packageName: String,
  pros: [],
  cons: [],
  links: [],
});
const frameworkSchema = new Schema({
  name: String,
  description: String,
  gitHubStars: Number,
  packageName: String,
  pros: [],
  cons: [],
  links: [],
});
const stylingSchema = new Schema({
  name: String,
  description: String,
  gitHubStars: Number,
  packageName: String,
  pros: [],
  cons: [],
  links: [],
});

//Trend schema expire after 30s of the entry was made
const trendSchema = new Schema({
  type: String,
  createAt: {type: Date, expires: 30, default: Date.now },
  google: [],
  npm: [],
});

const Card = mongoose.model("card", cardSchema);
const Bundler = mongoose.model("bundler", bundlerSchema);
const Database = mongoose.model("database", databaseSchema);
const Server = mongoose.model("server", serverSchema);
const Framework = mongoose.model("framework", frameworkSchema);
const Styling = mongoose.model("styling", stylingSchema);
const Trend = mongoose.model("trend", trendSchema);

const MONGO_URI =
  "mongodb+srv://peter:stabrabbits@cluster0.uedjbsz.mongodb.net/?retryWrites=true&w=majority";

// CONNECTING MONGODB
mongoose.set("strictQuery", true);
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "technologies",
  })
  .then(() => {
    /*ADD DATA TO DIFFERENT COLLECTIONS */
    // cards.forEach((card) => {
    //   switch (card.type) {
    //     case "Bundler":
    //       Bundler.create(card);
    //       break;
    //     case "Database":
    //       Database.create(card);
    //       break;
    //     case "Server":
    //       Server.create(card);
    //       break;
    //     case "Frameworks":
    //       Framework.create(card);
    //       break;
    //     case "Styling":
    //       Styling.create(card);
    //       break;
    //   }
    // });
    /* ADD DATA ONE TIME */
    //Card.insertMany(cards);
    console.log("Connected to Mongo DB.");
  })
  .catch((err) => console.log(err));

module.exports = { Card, Bundler, Database, Server, Framework, Styling };

const express = require("express");
const route = express.Router();
const dbController = require("../controllers/dbController");
const {
  get1YearInterestTrending,
} = require("../controllers/googleTrendController");
const {
  get1YearDownloadTrending,
} = require("../controllers/npmDownloadController");

// GRABBING DATA TO RENDER ON FRONTEND
route.get("/", dbController.getTech, (req, res) => {
  res.status(200).json(res.locals.cards);
});

// GRAB GOOGLE TRENDING DATA FOR GIVEN PACKAGE
route.get("/google-trending", get1YearInterestTrending, (req, res) => {
  res.status(200).send(res.locals.googleTrending);
});

// GRAB NPM DOWNLOAD DATA FOR GIVEN PACKAGE
route.get("/npm-download", get1YearDownloadTrending, (req, res) => {
  console.log("1year");
  res.status(200).json(res.locals.npmTrending);
});

module.exports = route;

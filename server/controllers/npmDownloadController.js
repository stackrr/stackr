//----------------------ERROR HANDLER ------------------------------------------
const createError = require("./createError");
const controller = "npmDownloadController";

//------------------------IMPORT & CONTROLLER INTIALIZE------------------------

const npmDownloadController = {};

//--------------------GET INTEREST OVER 1 YEAR----------------------------------
npmDownloadController.get1YearDownloadTrending = async (req, res, next) => {
  //Obtain the array of packageName from the request query
  const { packageName } = req.query;
  const packageArr = packageName.split(",");
  try {
    res.locals.npmTrending = packageArr;
    next();
  } catch (err) {
    console.log("error");
    next(
      createError({
        controller,
        method: "get1YearDownloadTrending",
        type: "Invalid NPM Download Query",
        status: 404,
        err,
      })
    );
  }
};

module.exports = npmDownloadController;

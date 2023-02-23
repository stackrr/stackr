//----------------------ERROR HANDLER ------------------------------------------
const createError = require("./createError");
const controller = "googleTrendController";

//------------------------IMPORT & CONTROLLER INTIALIZE------------------------
const googleTrends = require("google-trends-api");

const googleTrendController = {};
//Intialize Start Time
const startTime = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);

//--------------------GET INTEREST OVER 1 YEAR----------------------------------
googleTrendController.get1YearInterestTrending = async (req, res, next) => {
  //Obtain the array of packageName from the request query
  const { packageName } = req.query;
  const packageArr = packageName.split(",");
  try {
    let interest = JSON.parse(
      await googleTrends.interestOverTime({
        keyword: packageArr,
        startTime,
      })
    );
    //Access the timeline data property:
    interest = interest.default.timelineData;
    //Filter interest to get only time & value data points
    interest = interest.map(({ formattedAxisTime, value }) => {
      return {
        day: formattedAxisTime,
        value,
      };
    });

    //Organize interest based on package name:
    const packageInterest = packageArr.map((packageName, i) => {
      const data = {};
      data[packageName] = interest.map(({ day, value }) => {
        return { day, val: value[i] };
      });
      return data;
    });
    res.locals.googleTrending = packageInterest;
    next();
  } catch (err) {
    console.log("error");
    next(
      createError({
        controller,
        method: "get1YearInterestTrending",
        type: "Invalid Google Trending Query",
        status: 404,
        err,
      })
    );
  }
};

module.exports = googleTrendController;

//----------------------ERROR HANDLER ------------------------------------------
const createError = require("./createError");
const controller = "npmDownloadController";

//------------------------IMPORT & CONTROLLER INTIALIZE------------------------

const npmDownloadController = {};

//--------------------GET INTEREST OVER 1 YEAR----------------------------------
npmDownloadController.get1YearDownloadTrending = async (req, res, next) => {
  //Obtain the array of packageName from the request query
  const { packageName } = req.query;
  const frequency = 7;
  console.log(packageName);

  try {
    const response = await fetch(
      `https://api.npmjs.org/downloads/range/last-year/${packageName}`
    );
    const downloadData = await response.json();

    for (let fw in downloadData) {
      let total = 0;
      const { downloads } = downloadData[fw];
      const averageDownload = [];
      for (let i = 0; i < downloads.length; i++) {
        if ((i + 1) % frequency) {
          total += downloads[i].downloads;
        } else {
          averageDownload.push({
            day: new Date(downloads[i].day).toDateString().slice(4),
            val: Math.round(total / frequency),
          });
          total = 0;
        }
      }
      downloadData[fw] = averageDownload;
    }
    res.locals.npmTrending = downloadData;
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

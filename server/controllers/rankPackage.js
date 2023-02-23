const {
  Bundler,
  Database,
  Server,
  Framework,
  Styling,
} = require("../models/Card");

/**Rank package based on their popularity of the last 4 weeks
 *
 * @param {*} trendData : npm download stats / google search trending for all packages
 * @param {*} stackLevel : type of package, such as Bundler, Database, ....
 * @returns Sorted package information
 */
const rankPackage = async (trendData, stackLevel) => {
  let rankPackage = [];
  //Loop through the trendData:
  for (let package in trendData) {
    //Find the total of the last 4 weeks
    let tot = 0;
    const length = trendData[package].length;
    for (let i = length - 4; i < length; i++) {
      tot += trendData[package][i].val;
    }
    rankPackage.push([package, tot]);
  }
  //Sort the rankPackage based on total in descending order:
  rankPackage = rankPackage
    .sort((a, b) => b[1] - a[1])
    .map(([package, _]) => package);

  //Fetch Data based on provided stackLevel
  switch (stackLevel) {
    case "Bundler":
      await fetchData(Bundler, rankPackage);
      break;
    case "Database":
      await fetchData(Database, rankPackage);
      break;
    case "Server":
      await fetchData(Server, rankPackage);
      break;
    case "Frameworks":
      await fetchData(Framework, rankPackage);
      break;
    case "Styling":
      await fetchData(Styling, rankPackage);
      break;
  }

  return rankPackage;
};

async function fetchData(collection, rankPackage) {
  for (let i in rankPackage) {
    const packageName = rankPackage[i];
    rankPackage[i] = await collection.findOne({ packageName });
  }
}

module.exports = rankPackage;

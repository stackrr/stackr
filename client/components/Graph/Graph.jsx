import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

function Graph({
  packageNames,
  setNpmStats,
  npmStats,
  trendingType,
  setTrendingType,
}) {
  const lineColors = [
    "blue",
    "red",
    "green",
    "purple",
    "orange",
    "pink",
    "cyan",
    "yellow",
  ];
  //Initialize graph data:
  const [graphData, setGraphData] = useState({});
  //   const [trendingType, setTrendingType] = useState("npm-download");

  /** When click create graph, fetchData is invoked
   * 1. fetch to get npm/google search trending
   * 2. input to dataset for graphing
   */
  const fetchData = async () => {
    //Join all package packageNames with a ','
    let packageNameString = packageNames.join(",");
    let downloadData;

    /** GET npm download data over a year range for all packages
     * Then update npm stats state
     */
    try {
      const res = await fetch(
        `/api/${trendingType}?packageName=${packageNameString}`
      );
      downloadData = await res.json();
      //Update npm stats state
      setNpmStats(downloadData);
    } catch (err) {
      console.log({ err });
    }

    //---CREATE GRAPH---
    //Fill ds with datasets objects
    //each line(framework) has to have its own dataset object with label, data, borderColor, and backgroundColor
    const ds = [];
    for (let i = 0; i < packageNames.length; i++) {
      ds.push({
        label: packageNames[i],
        data: downloadData[packageNames[i]].map(({ val }) => val),
        borderColor: lineColors[i],
        backgroundColor: lineColors[i],
      });
    }
    //Set dataset within data to ds
    const data = {
      labels: downloadData[packageNames[0]].map(({ day }) => day), // X-axis columns
      datasets: ds,
    };
    //Set graph data state
    setGraphData(data);
  };

  /** When click toggle, update trending type to either npm-download or google-trending
   */
  //Update Trending Type
  const handleToggleClick = () => {
    setTrendingType(
      trendingType === "npm-download" ? "google-trending" : "npm-download"
    );
  };
  //Refetch Data after trending type has changed
  useEffect(() => {
    if (Object.keys(npmStats).length) {
      fetchData();
    }
  }, [trendingType]);

  if (!Object.keys(npmStats).length)
    return <button onClick={fetchData}>Create Graph</button>;

  if (Object.keys(npmStats).length) {
    return (
      <div className="w-full flex flex-col items-center">
        <button className="" onClick={handleToggleClick}>
          Toggle {trendingType}
        </button>
        <div className="flex justify-center w-3/5 bg-gray-50 opacity-85 rounded-xl my-8 ">
          <Line
            data={graphData}

            //  options={{
            //     responsive: false
            //  }}
          />
        </div>
      </div>
    );
  }
}

export default Graph;

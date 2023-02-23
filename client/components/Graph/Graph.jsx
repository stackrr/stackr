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
import styles from "./Graph.module.css";

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
  const currentTrendingType = trendingType === "npm-download" ? "NPM Download" : "Google Trending";
  const switchGraphButtonText = trendingType === "npm-download" ? "Google Trending" : "NPM Download";
  //Refetch Data after trending type has changed
  useEffect(() => {
    if (Object.keys(npmStats).length) {
      fetchData();
    }
  }, [trendingType]);

  if (!Object.keys(npmStats).length)
    return <button className={styles.graphButton} onClick={fetchData}>See Popularity</button>;

  if (Object.keys(npmStats).length) {
    return (
      <div className={styles.graphAndButtonContainer}>
        <button className={styles.graphButton} onClick={handleToggleClick}><b>{currentTrendingType}</b>, Toggle To {switchGraphButtonText}</button>
        <div className={styles.graphGradientOutline}>
        <div className={styles.graphContainer}>
          <Line
            className={styles.graphChart}
            data={graphData}

            //  options={{
            //     responsive: false
            //  }}
          />
        </div>
        </div>
      </div>
    );
  }
}

export default Graph;

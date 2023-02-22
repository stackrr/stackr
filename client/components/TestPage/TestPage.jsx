import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./TestPage.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import Card from "../Card/Card";
import StackChoiceBar from "../StackChoiceBar/StackChoiceBar";
import StackChoice from "../StackChoice/StackChoice";
import TopBar from "../TopBar/TopBar";
import NpmGraph from "../Graph/NpmGraph";

function TestPage({
  handleClick,
  stackChoices,
  setStackChoices,
  nextPage,
  prevPage,
  data,
  completed,
  setCompleted,
}) {
  // dummy data for rendering cards
  // saving technology choice to state

  // get state for options
  // const [options, setOptions] = useState(testOptions);

  console.log(data);
  
  //Initialize npmStats state
  const [npmStats, setNpmStats] = useState({});


  // function leftScroll() {
  //   const left = document.querySelector(".cardsHolder");
  //   left.scrollBy(200, 0);
  // }
  // function rightScroll() {
  //   const right = document.querySelector(".cardsHolder");
  //   right.scrollBy(-200, 0);
  // }

//   const fetchData = ()=> {
//     //Join all package packageNames with a ','
//     // console.log("These are the packageNames: ", packageNames);
//     const {packageNames} = data;
//     let packageNameString = packageNames.join(',');
//     console.log("This is the packageNameString: ", packageNameString);
//     setNpmStats({});
//     //Fetch npm download data over a year range for all package
//     fetch(`https://api.npmjs.org/downloads/range/last-year/${packageNameString}`)
//     .then(res=>res.json())
//     .then(downloadData => {
//         // for (let fw in downloadData) {
//         //     // downloadData[fw].downloads = downloadData[fw].downloads.filter((_,i) => i%10==0);
//         //     let total = 0;
//         //     const {downloads} = downloadData[fw];
//         //     const averageDownload = [];
//         //     for (let i = 0; i < downloads.length; i++){
//         //         if ((i+1)%frequency){
//         //             total+=downloads[i].downloads;
//         //         }
//         //         else{
//         //             averageDownload.push({
//         //                 day: downloads[i].day, 
//         //                 download: total/frequency
//         //             });
//         //             total = 0;
//         //         }
//         //     }
//         //     console.log({averageDownload})
//         //     // downloadData[fw].averageDownload = averageDownload;
//         // }
//         setNpmStats(downloadData);
//         console.log("This is the downloadData: ", downloadData)
//     })
//     .catch(err => console.log({err}))
//  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.progressBarHolder}>
        <ProgressBar
          className={styles.progressBar}
          completed={completed}
          setCompleted={setCompleted}
        />
        <h1
          className={`${styles.logo} bg-gradient-to-r from-indigo-300 via-sky-400 to-indigo-300 bg-clip-text text-5xl text-transparent`}
        >
          stackr
        </h1>
      </div>
      <h2 className={styles.currentTestTitle}>Choose Your {data[0].type}</h2>
      <div className={styles.cardAndStackHolder}>
        {/* <button className={styles.left} onClick={leftScroll()}>
            Left
          </button> */}

        <div className={styles.cardsHolder}>
          {data.map((option, i) => {
            return (
              <Card
                key={`choice-${i}`}
                option={option}
                handleClick={handleClick}
                data={data}
              />
            );
          })}
        </div>
        {/* <button className={styles.right} onClick={rightScroll()}>
            Right
          </button> */}

        {/* <div className={styles.stackColumn}> */}
        <StackChoiceBar stackChoices={stackChoices} />
        {/* </div> */}
      </div>
      <div className={styles.backNextBtnContainer}>
        {prevPage && (
          <Link to={prevPage} onClick={()=>setNpmStats({})} className={styles.backButton}>
            Back
          </Link>
        )}
        <Link to={nextPage} onClick={()=>setNpmStats({})} className={styles.nextButton}>
          Continue
        </Link>
      </div>
      <NpmGraph setNpmStats={setNpmStats} npmStats={npmStats} packageNames = {data.map(({packageName}) => packageName)} />
    </div>
  );
}

export default TestPage;

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./TestPage.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import Card from "../Card/Card";
import StackChoiceBar from "../StackChoiceBar/StackChoiceBar";
import StackChoice from "../StackChoice/StackChoice";
import TopBar from "../TopBar/TopBar";

function TestPage({
  handleClick,
  stackChoices,
  setStackChoices,
  nextPage,
  data,
  completed,
  setCompleted,
}) {
  // dummy data for rendering cards
  // saving technology choice to state

  // get state for options
  // const [options, setOptions] = useState(testOptions);

  console.log(data);

  // function leftScroll() {
  //   const left = document.querySelector(".cardsHolder");
  //   left.scrollBy(200, 0);
  // }
  // function rightScroll() {
  //   const right = document.querySelector(".cardsHolder");
  //   right.scrollBy(-200, 0);
  // }

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
      <Link to={nextPage} className={styles.nextButton}>
        Continue
      </Link>
    </div>
  );
}

export default TestPage;

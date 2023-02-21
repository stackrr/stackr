import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./TestPage.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import Card from "../Card/Card";
import StackChoiceSidebar from "../StackChoiceBar/StackChoiceSidebar";

import StackChoiceBar from "../StackChoiceBar/StackChoiceBar";
import StackChoice from "../StackChoice/StackChoice";
import TopBar from "../TopBar/TopBar";

function TestPage({ stackChoices, setStackChoices, nextPage }) {
  // dummy data for percentage completion
  const [completed, setCompleted] = useState(30);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  // dummy data for rendering cards
  const testOptions = [
    {
      name: "React",
      type: "Frontend Framework",
      summary: "very good",
      downloads: 100,
      features: ["f1", "f2", "f3"],
      pros: ["p1", "p2", "p3"],
      cons: ["c1", "c2", "c3"],
      resources: ["https://reactjs.org/docs/getting-started.html"],
    },
    {
      name: "Vue",
      type: "Frontend Framework",
      summary: "very bad",
      downloads: 100,
      features: ["f1", "f2", "f3"],
      pros: ["p1", "p2", "p3"],
      cons: ["c1", "c2", "c3"],
      resources: ["https://vuejs.org/guide/introduction.html"],
    },
    {
      name: "Angular",
      type: "Frontend Framework",
      summary: "decent",
      downloads: 100,
      features: ["f1", "f2", "f3"],
      pros: ["p1", "p2", "p3"],
      cons: ["c1", "c2", "c3"],
      resources: ["https://angular.io/docs"],
    },
  ];

  // saving technology choice to state
  function handleClick(choice) {
    // const choices = stackChoice.push(choice);
    console.log("choice", choice);
    console.log("stackChoices", stackChoices);
    const updatedChoices = [...stackChoices];
    updatedChoices.push(choice);
    console.log("updatedChoices", updatedChoices);
    setStackChoices(updatedChoices);
  }

  function handleToggle() {
    // const choices = stackChoice.push(choice);
    if (isSidebarVisible) {
      setIsSidebarVisible(false);
    } else {
      setIsSidebarVisible(true);
    }
  }

  // get state for options
  const [options, setOptions] = useState(testOptions);

  return (
    <div className={styles.wrapper}>
      <div className={styles.progressBarHolder}>
        <ProgressBar
          className={styles.progressBar}
          completed={completed}
          setCompleted={setCompleted}
        />
        <button onClick={handleToggle}>
          <h1
            className={`${styles.logo} bg-gradient-to-r from-indigo-300 via-sky-400 to-indigo-300 bg-clip-text text-5xl text-transparent`}
          >
            stackr
          </h1>
        </button>
      </div>
      <h2 className={styles.currentTestTitle}>
        Choose your Frontend Framework
      </h2>
      <div className={styles.cardHolder}>
        {options.map((option, i) => {
          return (
            <Card
              key={`choice-${i}`}
              option={option}
              handleClick={handleClick}
            />
          );
        })}
        <StackChoiceSidebar
          stackChoices={stackChoices}
          isVisible={isSidebarVisible}
          setIsSidebarVisible={setIsSidebarVisible}
        />
      </div>
      <div>
        <Link to={nextPage} className={styles.nextButton}>
          Continue
        </Link>
      </div>
    </div>
  );
}

export default TestPage;

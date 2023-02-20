import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./TestPage.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import Card from "../Card/Card";
import StackChoiceBar from "../StackChoiceBar/StackChoiceBar";
import StackChoice from "../StackChoice/StackChoice";

function TestPage({ stackChoices, setStackChoices }) {
  // dummy data for percentage completion
  const [completed, setCompleted] = useState(30);
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
    },
    {
      name: "Vue",
      type: "Frontend Framework",
      summary: "very bad",
      downloads: 100,
      features: ["f1", "f2", "f3"],
      pros: ["p1", "p2", "p3"],
      cons: ["c1", "c2", "c3"],
    },
    {
      name: "Angular",
      type: "Frontend Framework",
      summary: "decent",
      downloads: 100,
      features: ["f1", "f2", "f3"],
      pros: ["p1", "p2", "p3"],
      cons: ["c1", "c2", "c3"],
    },
  ];

  // saving technology choice to state
  function handleClick(choice) {
    // const choices = stackChoice.push(choice);
    console.log({ choice });
    console.log({ stackChoices });
    const updatedChoices = [...stackChoices];
    updatedChoices.push(choice);
    console.log({ updatedChoices });
    setStackChoices(updatedChoices);
  }

  // get state for options
  const [options, setOptions] = useState(testOptions);
  return (
    <div className={styles.wrapper}>
      <ProgressBar completed={completed} setCompleted={setCompleted} />
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
        <StackChoiceBar stackChoices={stackChoices} />
      </div>
    </div>
  );
}

export default TestPage;

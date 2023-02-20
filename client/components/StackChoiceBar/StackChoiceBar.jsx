import React from "react";
import styles from "./StackChoiceBar.module.css";
import StackChoice from "../StackChoice/StackChoice";

function StackChoiceBar({ stackChoices }) {
  console.log(stackChoices);
  return (
    <div className={styles.wrapper}>
      <div className={styles.stackChoiceBar}>
        {stackChoices.map((stackChoice) => {
          console.log("stackChoice", stackChoice);
          return <StackChoice stackChoice={stackChoice.name} />;
        })}
      </div>
    </div>
  );
}

export default StackChoiceBar;

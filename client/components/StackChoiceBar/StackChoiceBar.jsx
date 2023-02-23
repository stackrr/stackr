import React from "react";
import styles from "./StackChoiceBar.module.css";
import StackChoice from "../StackChoice/StackChoice";
import { Link } from "react-router-dom";
import ResultsPage from "../ResultsPage/ResultsPage";

function StackChoiceBar({ stackChoices }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.stackChoiceBar} data-testid="stackChoiceBar">
        {stackChoices.map((stackChoice) => {
          return <StackChoice stackChoice={stackChoice} />;
        })}
      </div>
      <Link to="/results" className={styles.resultsButton}>
        View Your Stack
      </Link>
    </div>
  );
}

export default StackChoiceBar;

import React from "react";
import styles from "./StackChoiceBar.module.css";
import StackChoice from "../StackChoice/StackChoice";
import { Link } from "react-router-dom";
import ResultsPage from "../ResultsPage/ResultsPage";

function StackChoiceSidebar({ stackChoices, isVisible, setIsSidebarVisible }) {
  console.log(stackChoices);
  return (
    <div>
      <div
        className={
          "fixed top-0 right-0 w-64 overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 " +
          (isVisible ? "visible" : "invisible")
        }
      >
        <ul className="space-y-2">
          {stackChoices.map((stackChoice) => {
            console.log("stackChoice", stackChoice);
            return <StackChoice stackChoice={stackChoice.name} />;
          })}
        </ul>
      </div>
      <Link to="/results" className={styles.resultsButton}>
        View Your Stack
      </Link>
    </div>
  );
}

export default StackChoiceSidebar;

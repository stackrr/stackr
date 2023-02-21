import React from "react";
import styles from "./ResultsPage.module.css";
import Selection from "../Selection/Selection";
import TopBar from "../TopBar/TopBar";

function ResultsPage({ stackChoices }) {
  return (
    <div className={styles.wrapper}>
      <TopBar />
      <div className="grid grid-cols-1 mx-auto gap-4 p-8">
        {stackChoices.map((choice, i) => (
          <Selection
            key={i}
            type={choice.type}
            name={choice.name}
            pros={choice.pros}
            cons={choice.cons}
            links={choice.links}
          />
        ))}
      </div>
    </div>
  );
}

export default ResultsPage;

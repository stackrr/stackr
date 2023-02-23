import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ResultsPage.module.css";
import Selection from "../Selection/Selection";
import TopBar from "../TopBar/TopBar";

function ResultsPage({ stackChoices, prevPage }) {
  return (
    <div className={styles.wrapper}>
      <TopBar />
      <div className={styles.btnWrapper}>
        <Link
          to={prevPage}
          className={styles.backButton}
          onClick={() => {
            setStackChoices([]);
          }}
        >
          Home
        </Link>
      </div>

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

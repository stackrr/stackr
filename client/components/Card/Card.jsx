import * as React from "react";
import styles from "./Card.module.css";

function Card({ option, handleClick }) {
  console.log(option);

  return (
    <div className={styles.cardAndButtonHolder}>
      <div className={styles.mainCard}>
        {Object.entries(option).map(([key, val], i) => {
          if (!Array.isArray(val)) {
            return (
              <div key={i} className={styles.infoBlock}>
                <h3>{key}: </h3>
                <span>{val}</span>
              </div>
            );
          } else {
            return (
              <div key={i} className={styles.infoBlock}>
                <h4>{key}: </h4>
                <ul className={styles.list}>
                  {val.map((point, i) => {
                    return <li key={i}>{point}</li>;
                  })}
                </ul>
              </div>
            );
          }
        })}
      </div>
      <button
        className={styles.selector}
        onClick={() => handleClick(option.name)}
      >
        Select {option.name}
      </button>
    </div>
  );
}

export default Card;

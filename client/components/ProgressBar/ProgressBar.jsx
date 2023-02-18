import React, { useEffect } from "react";
import styles from "./ProgressBar.module.css";

function ProgressBar({ completed, setCompleted }) {
  const bgColor = "#6a1b9a";

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  // TODO change colors based on level of completion
  // ie: red at 0% to green at 100%

  // useEffect(() => {
  //   setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  // }, []);

  return (
    <div className={styles.wrapper}>
      Progress Bar
      <div className={styles.containerStyles}>
        <div
          className={styles.fillerStyles}
          style={{
            backgroundColor: bgColor,
            width: `${completed}%`,
          }}
        >
          <span className={styles.labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;

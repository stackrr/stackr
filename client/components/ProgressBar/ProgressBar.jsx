import React from "react";
import styles from "./ProgressBar.module.css";

function ProgressBar() {
  const completed = 20;
  const bgColor = "#6a1b9a";
  return (
    <div className={styles.wrapper}>
      ProgressBar
      <div className={styles.containerStyles}>
        <div className={styles.fillerStyles} style={{ color: bgColor }}>
          <span className={styles.labeStyles}> {`${completed}%`} </span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;

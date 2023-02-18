import React, { useState } from "react";
import styles from "./TestPage.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";

function TestPage() {
  const [completed, setCompleted] = useState(30);
  return (
    <div>
      <ProgressBar
        completed={completed}
        setCompleted={setCompleted}
      ></ProgressBar>
      <div className={styles.wrapper}>TestPage</div>
    </div>
  );
}

export default TestPage;

import React from "react";
import styles from "./StackChoice.module.css";

function StackChoice({ stackChoice }) {
  return <div className={styles.wrapper} data-testid="stackChoice">{stackChoice.name}</div>;
}

export default StackChoice;

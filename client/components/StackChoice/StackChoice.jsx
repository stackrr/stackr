import React from "react";
import styles from "./StackChoice.module.css";

function StackChoice({ stackChoice }) {
  return <div className={styles.wrapper}>{stackChoice.name}</div>;
}

export default StackChoice;

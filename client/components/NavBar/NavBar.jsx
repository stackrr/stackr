import React from "react";
import styles from "./NavBar.module.css";
import TopBar from "../TopBar/TopBar";

function NavBar() {
  return (
    <div className={styles.wrapper}>
      <TopBar />
    </div>
  );
}

export default NavBar;

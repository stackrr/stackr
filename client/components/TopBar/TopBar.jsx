import React from "react";
import styles from "./TopBar.module.css";

function TopBar() {
  return (
    <div className="w-screen p-3 flex justify-center">
      <h1 className="text-center inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
        stackr
      </h1>
    </div>
  );
}

export default TopBar;

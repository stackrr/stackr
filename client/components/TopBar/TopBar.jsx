import React from "react";
import { Link } from "react-router-dom";
import styles from "./TopBar.module.css";

function TopBar() {
  return (
    <div className="w-screen p-3 flex justify-center">
      <Link to="/">
        <h1 className="text-center inline bg-gradient-to-r from-indigo-300 via-sky-400 to-indigo-300 bg-clip-text font-display text-5xl tracking-tight text-transparent">
          stackr
        </h1>
      </Link>
    </div>
  );
}

export default TopBar;

import React from "react";
import { Link } from "react-router-dom";

import styles from "./TestPage.module.css";

function TestPage() {
  return (
    <div>
      <div className={styles.wrapper}>
        This is the TestPage
        <div>
          <div>
            <Link to="/results">go to Results Page</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestPage;

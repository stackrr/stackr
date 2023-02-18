import React, { useEffect, useState } from "react";
import styles from './Home.module.css'
// import { Link } from "react-router-dom";

function Home() {
  const [dummyData, setDummyData] = useState('hello world')
  useEffect(() => {
    console.log("hey");
    fetch('/').then(data => data.json())
    .then((dummy) => {
      console.log('dummy', dummy);
      setDummyData(dummy);
    })
  }, []);

  return <div className={styles.wrapper}  >
    {dummyData}</div>;
}

export default Home;

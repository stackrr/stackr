import React from "react";
import { Link } from "react-router-dom";
import TopBar from "../TopBar/TopBar";
import HomeCarousel from "../CarouselCard/HomeCarousel";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.background}>
      <TopBar />
      <div className="bg-white/90 rounded-2xl shadow-lg shadow-[rgb(31,38,135)]/60 h-5/6 w-5/6 border-1 flex flex-col justify-center items-center">
        <div className="w-5/6 h-5/6 flex justify-center items-center">
          <HomeCarousel />
        </div>
        <div className=" flex flex-col justify-center items-center">
          <Link
            to="/test"
            className="mt-3 inline-flex items-center bg-gradient-to-r bg-gradient-to-r from-indigo-300 via-sky-400 to-indigo-300 text-2xl text-white font-bold py-2 px-4 hover:bg-purple-400 py-3 px-8 rounded-lg border-b-4 border-black-700 hover:border-purple-500 transition duration-300"
          >
            Build Your Tech Stack
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

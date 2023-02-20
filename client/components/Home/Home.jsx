import React, { useEffect, Fragment, useState } from "react";
import HomeCarousel from "./HomeCarousel";
import { Link } from "react-router-dom";

import TopBar from "../TopBar/TopBar";

function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-200 w-screen h-screen flex justify-center items-center">
      <TopBar />
      <div className="bg-white rounded-2xl shadow-lg  h-5/6 w-5/6 border-1 flex flex-col justify-center items-center">
        <div className="w-5/6 h-5/6 flex justify-center items-center">
          <HomeCarousel />
        </div>
        <div className=" flex flex-col justify-center items-center">
          <Link
            to="/test"
            className="mt-3 inline-flex items-center bg-gradient-to-r from-purple-400 to-pink-600 text-2xl text-white font-bold py-2 px-4 hover:bg-yellow-700 py-3 px-8 rounded-lg border-b-4 border-black-700 hover:border-yellow-800 transition duration-300"
          >
            Build Your Tech Stack
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

// useEffect(() => {
//   // fetch("/")
//   //   .then((data) => data.json())
//   //   .then((dummy) => {
//   //     console.log("dummy", dummy);
//   //     setDummyData(dummy);
//   //   });
// }, []);

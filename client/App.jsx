import React from "react";
import { Routes, Route } from "react-router-dom";
import TestPage from "./components/TestPage/TestPage";
import Home from "./components/Home/Home";
// import "./index.css";
// import ResultsPage from "./components/ResultsPage/ResultsPage";

function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<NavBar/> }> */}
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<TestPage />} />
      {/* <Route path="/" element={<ResultsPage />} /> */}
    </Routes>
  );
}

export default App;

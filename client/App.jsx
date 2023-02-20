import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TestPage from "./components/TestPage/TestPage";
import Home from "./components/Home/Home";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import "./index.css";

function App() {
  const [stackChoices, setStackChoices] = useState([]);
  return (
    <Routes>
      {/* <Route path='/' element={<NavBar/> }> */}
      <Route path="/" element={<Home />} />
      <Route
        path="/test"
        element={
          <TestPage
            stackChoices={stackChoices}
            setStackChoices={setStackChoices}
          />
        }
      />
      {/* <Route path="/" element={<ResultsPage />} /> */}
    </Routes>
  );
}

export default App;

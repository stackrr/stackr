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
      <Route path="/" element={<Home />} />
      <Route
        path="/test"
        element={
          <TestPage
            stackChoices={stackChoices}
            setStackChoices={setStackChoices}
            nextPage="/"
          />
        }
      />
      <Route
        path="/bundler"
        element={
          <TestPage
            stackChoices={stackChoices}
            setStackChoices={setStackChoices}
            nextPage="/database"
          />
        }
      />
      <Route
        path="/database"
        element={
          <TestPage
            stackChoices={stackChoices}
            setStackChoices={setStackChoices}
            nextPage="/server"
          />
        }
      />
      <Route
        path="/server"
        element={
          <TestPage
            stackChoices={stackChoices}
            setStackChoices={setStackChoices}
            nextPage="/frameworks"
          />
        }
      />
      <Route
        path="/frameworks"
        element={
          <TestPage
            stackChoices={stackChoices}
            setStackChoices={setStackChoices}
            nextPage="/styling"
          />
        }
      />
      <Route
        path="/styling"
        element={
          <TestPage
            stackChoices={stackChoices}
            setStackChoices={setStackChoices}
            nextPage="/results"
          />
        }
      />
      <Route
        path="/results"
        element={<ResultsPage stackChoices={stackChoices} />}
      />
    </Routes>
  );
}

export default App;

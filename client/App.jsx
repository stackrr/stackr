import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import TestPage from "./components/TestPage/TestPage";
import Home from "./components/Home/Home";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import "./index.css";

function App() {
  const [stackChoices, setStackChoices] = useState([]);
  const [bundlerData, setBundlerData] = useState([]);
  const [databaseData, setDatabaseData] = useState([]);
  const [serverData, setServerData] = useState([]);
  const [frameworksData, setFrameworksData] = useState([]);
  const [stylingData, setStylingData] = useState([]);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        const bundlerData = [];
        const databaseData = [];
        const serverData = [];
        const frameworksData = [];
        const stylingData = [];

        for (let obj of data) {
          switch (obj.type) {
            case "Bundler":
              bundlerData.push(obj);
              break;
            case "Database":
              databaseData.push(obj);
              break;
            case "Server":
              serverData.push(obj);
              break;
            case "Frameworks":
              frameworksData.push(obj);
              break;
            case "Styling":
              stylingData.push(obj);
              break;
          }
        }
        setBundlerData(bundlerData);
        setDatabaseData(databaseData);
        setServerData(serverData);
        setFrameworksData(frameworksData);
        setStylingData(stylingData);
      });
  }, []);

  function handleClick(choice, data) {
    console.log("handling click");
    // get last choice pushed onto stack choice
    let lastChoice;
    if (stackChoices.length > 0) {
      lastChoice = stackChoices[stackChoices.length - 1];
    } else {
      lastChoice === "not made";
    }
    let exists = false;
    console.log({ data });
    // the data passed in will be the data from whichever test page has the filtered
    // if last choice is in current data type, that means the current option type has already been chosen
    data.forEach((option) => {
      console.log({ lastChoice });
      console.log({ option });
      if (lastChoice !== undefined) {
        if (option.name == lastChoice.name) exists = true;
      }
    });
    const updatedChoices = [...stackChoices];

    // if choice type is not on stack, add to stack
    if (!exists) {
      // updatedChoices.push(choice.name);
      updatedChoices.push(choice);
    } else {
      // updatedChoices[updatedChoices.length - 1] = choice.name;
      updatedChoices[updatedChoices.length - 1] = choice;
    }
    // if type is already on stack, overwrite previous

    const completedPercentage = (updatedChoices.length / 5) * 100;
    console.log({ completedPercentage });
    //update completed percentage
    setCompleted(completedPercentage);

    // console.log("updatedChoices", updatedChoices);
    setStackChoices(updatedChoices);
  }

  return (
    <Routes>
      <Route path="/" element={<Home nextPage="/bundler" />} />

      <Route
        path="/bundler"
        element={
          <TestPage
            completed={completed}
            stackChoices={stackChoices}
            handleClick={handleClick}
            data={bundlerData}
            nextPage="/database"
          />
        }
      />
      <Route
        path="/database"
        element={
          <TestPage
            completed={completed}
            stackChoices={stackChoices}
            handleClick={handleClick}
            data={databaseData}
            nextPage="/server"
            prevPage="/bundler"
          />
        }
      />
      <Route
        path="/server"
        element={
          <TestPage
            completed={completed}
            stackChoices={stackChoices}
            handleClick={handleClick}
            data={serverData}
            nextPage="/frameworks"
            prevPage="/database"
          />
        }
      />
      <Route
        path="/frameworks"
        element={
          <TestPage
            completed={completed}
            stackChoices={stackChoices}
            handleClick={handleClick}
            data={frameworksData}
            nextPage="/styling"
            prevPage="/server"
          />
        }
      />
      <Route
        path="/styling"
        element={
          <TestPage
            completed={completed}
            stackChoices={stackChoices}
            handleClick={handleClick}
            data={stylingData}
            nextPage="/results"
            prevPage="/frameworks"
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

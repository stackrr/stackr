import React from "react";
import styles from "./ResultsPage.module.css";
import Selection from "../Selection/Selection";
import TopBar from "../TopBar/TopBar";

function ResultsPage() {
  const selections = [
    {
      category: "Bundler",
      tech: "Vite",
      resources: ["https://vitejs.dev/"],
      pros: "pros-4",
      cons: "cons-4",
    },
    {
      category: "Back-end",
      tech: "Express",
      resources: [
        "https://expressjs.com/",
        "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
      ],
      pros: "pros-2",
      cons: "cons-2",
    },
    {
      category: "Database",
      tech: "Postgres",
      resources: ["https://www.postgresql.org/"],
      pros: "pros-3",
      cons: "cons-3",
    },
    {
      category: "Front-end",
      tech: "React JS",
      resources: [
        "https://reactjs.org/",
        "https://www.w3schools.com/whatis/whatis_react.asp",
        "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
      ],
      pros: "pro-1",
      cons: "cons-1",
    },
    {
      category: "Styling",
      tech: "Tailwind CSS",
      resources: [
        "https://tailwindcss.com/",
        "https://www.freecodecamp.org/news/what-is-tailwind-css-a-beginners-guide/",
      ],
      pros: "pro-1",
      cons: "cons-1",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <TopBar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
        {/* <div class="mx-auto grid-cols-2"> */}
        {selections.map((selection) => (
          <Selection
            key={`${selection}`}
            category={selection.category}
            tech={selection.tech}
            resources={selection.resources}
            pros={selection.pros}
            cons={selection.cons}
          />
        ))}
      </div>
    </div>
  );
}

export default ResultsPage;

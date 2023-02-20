import React from "react";
import styles from "./ResultsPage.module.css";
import Selection from "../Selection/Selection";

function ResultsPage() {
  const selections = [
    {
      tech: "React JS",
      pros: "pro-1",
      cons: "cons-1",
    },
    {
      tech: "Express",
      pros: "pros-2",
      cons: "cons-2",
    },
    {
      tech: "Postgres",
      pros: "pros-3",
      cons: "cons-3",
    },
    {
      tech: "Vite",
      pros: "pros-4",
      cons: "cons-4",
    },
    {
      tech: "Tailwind CSS",
      pros: "pro-1",
      cons: "cons-1",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div>
        {selections.map((selection) => (
          <Selection
            key={`${selection}`}
            tech={selection.tech}
            pros={selection.pros}
            cons={selection.cons}
          />
        ))}
      </div>
    </div>
  );
}

export default ResultsPage;

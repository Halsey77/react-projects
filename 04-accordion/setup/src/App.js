import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const questionElements = data.map((q) => (
    <SingleQuestion key={q.id} {...q} />
  ));

  return (
    <main>
      <div className="container">
        <h3>questions and answers</h3>
        <section className="info">{questionElements}</section>
      </div>
    </main>
  );
}

export default App;

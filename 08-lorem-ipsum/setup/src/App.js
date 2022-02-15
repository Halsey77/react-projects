import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(data.slice(0, count));
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ispum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(event) => setCount(event.target.value)}
          min="1"
        ></input>
        <button type="submit" className="btn">
          Generate text
        </button>
      </form>
      <article className="lorem-text">
        {text.map((t, index) => (
          <p key={index}>{t}</p>
        ))}
      </article>
    </section>
  );
}

export default App;

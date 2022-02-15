import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [currIndex, setcurrIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      changeIndex("next");
    }, 3000);
    return () => clearInterval(id);
  }, [currIndex]);

  const changeIndex = (action) => {
    let newIndex;
    switch (action) {
      case "next":
        if (currIndex === people.length - 1) newIndex = 0;
        else newIndex = currIndex + 1;
        break;
      case "prev":
        if (currIndex === 0) newIndex = people.length - 1;
        else newIndex = currIndex - 1;
        break;
    }

    setcurrIndex(newIndex);
  };

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, index) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (index === currIndex) {
            position = "activeSlide";
          }
          if (
            index === currIndex - 1 ||
            (currIndex === 0 && index === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img"></img>
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => changeIndex("prev")}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => changeIndex("next")}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;

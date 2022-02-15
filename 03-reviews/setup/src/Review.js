import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];

  const onNavBtnCLicked = (action) => {
    switch (action) {
      case "prev":
        if (index > 0) setIndex((prevIndx) => prevIndx - 1);
        else setIndex(people.length - 1);
        break;
      case "next":
        if (index < people.length - 1) setIndex((prevIndx) => prevIndx + 1);
        else setIndex(0);
        break;
      case "random":
        setIndex((prevIndx) => {
          let newIndx = Math.floor(Math.random() * people.length);
          while(newIndx === prevIndx){
            newIndx = Math.floor(Math.random() * people.length);
          }
          return newIndx;
        });
        break;
    }
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => onNavBtnCLicked("prev")}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => onNavBtnCLicked("next")}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={() => onNavBtnCLicked("random")}>
        Surprise me!
      </button>
    </article>
  );
};

export default Review;

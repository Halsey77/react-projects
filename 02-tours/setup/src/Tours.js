import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  const tourElements = tours.map((tour) => (
    <Tour key={tour.id} {...tour} removeTour={removeTour} />
  ));

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>{tourElements}</div>
    </section>
  );
};

export default Tours;

import React from "react";

const Categories = ({ filterItems, categories }) => {
  const categoryElements = categories.map((category) => (
    <button className="filter-btn" onClick={() => filterItems(category)}>
      {category}
    </button>
  ));

  return <div className="btn-container">{categoryElements}</div>;
};

export default Categories;

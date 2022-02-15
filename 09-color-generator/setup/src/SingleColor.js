import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ index, rgb, weight }) => {
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(",");
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    const id = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(id);
  }, [alert]);

  const handleClick = (e) => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  };

  return (
    <article
      className={`color ${index > 10 && `color-light`}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
      onClick={handleClick}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;

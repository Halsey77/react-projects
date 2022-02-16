import React, { useEffect } from "react";

const Alert = ({ msg, type, removeAlert, list }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;

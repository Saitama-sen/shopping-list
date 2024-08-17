import React from "react";

const Square = ({ value, onclickSqure }) => {
  return <button onClick={onclickSqure}>{value}</button>;
};

export default Square;

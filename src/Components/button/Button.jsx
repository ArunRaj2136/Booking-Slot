import React from "react";
import "./button.scss";

const Button = ({ name, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {name}
    </button>
  );
};

export default Button;

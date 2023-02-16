import React from "react";
import "./Indicator.scss";

function Indicator({ name, free }) {
  return (
    <div className="indicatorGroup">
      {free ? (
        <div className="rectangle free "></div>
      ) : (
        <div className="rectangle busy"></div>
      )}
      <p>{name}</p>
    </div>
  );
}

export default Indicator;

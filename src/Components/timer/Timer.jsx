import React from "react";
import "./Timer.scss";

const Timer = ({ active = false, time }) => {
  return (
    <div className={active ? `timer active` : `timer`}>
      <p className="timer__text">{time}</p>
    </div>
  );
};

export default Timer;

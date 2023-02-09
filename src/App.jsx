import React from "react";
import "./app.scss";

function App() {
  return (
    <div className="container">
      <p className="title">find a free time</p>
      <div className="inputs__container">
        <input type="date"></input>
        <input type="time"></input>
        <input type="number"></input>
      </div>
      <button>Find</button>
      <div className="timer__container"></div>
      <div className="indicators__container"></div>
    </div>
  );
}

export default App;

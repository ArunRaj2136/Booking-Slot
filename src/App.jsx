import React, { useState } from "react";
import "./app.scss";
import Input from "./Components/input/Input";

function App() {
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [duration, setDuration] = useState();

  return (
    <div className="container">
      <p className="title">find a free time</p>
      <div className="inputs__container">
        <Input
          label="Date"
          type="date"
          value={date}
          onChangeHandler={setDate}
        />
        <Input
          label="Start Time"
          type="time"
          value={startTime}
          onChangeHandler={setStartTime}
        />
        <Input
          label="Duration"
          type="number"
          value={duration}
          onChangeHandler={setDuration}
        />
      </div>
      <button>Find</button>
      <div className="timer__container"></div>
      <div className="indicators__container"></div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./app.scss";
import { eventsData } from "../src/utils/eventsData";
import Input from "./Components/input/Input";
import Button from "./Components/button/Button";
import Timer from "./Components/timer/Timer";
import Indicators from "./Components/indicator/Indicator";

function App() {
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [duration, setDuration] = useState();

  const findAvailableSlots = () => {
    console.log("arun");
  };
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
      <Button name="Find" onClick={findAvailableSlots} />
      <div className="timer__container">
        <Timer time="8:00am" />
        <Timer time="9:00am" active="true" />
        <Timer time="10:00am" />
      </div>
      <div className="indicators__container">
        <Indicators name="Busy" />
        <Indicators name="Free" free="true" />
      </div>
    </div>
  );
}

export default App;

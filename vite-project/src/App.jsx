import React, { useRef } from "react";
import { useState, useEffect } from "react";

const App = () => {
  // Stopwatch state
  const [timer, setTimer] = useState(0);
  let timeRef = useRef(null);

  // Start timer
 const startTimer = () => {
   if (!timeRef.current) {
     timeRef.current = setInterval(() => { // Increment timer every second, see the flow u click on start button and function start fn called and set interval fn is called in interval of 1 sec -- ie timeref.current stores the id of the interval if not 0 starts from 1 ie 1,2,3 . When stop clicked the timeref current is cleared and the timer stops incrementing ie set to 0 using clear interval  /// UseRef is needed to persist the interval ID across renders qithout it the interval id would reset on every render therefore we use useRef to store the interval id
       setTimer((timer) => timer + 1);
     }, 1000);
   }
 };

  // Stop timer
  const stopTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  // Reset timer
  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      <div style={{ fontSize: "2rem", margin: "1rem 0" }}>{timer} s</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};
export default App;

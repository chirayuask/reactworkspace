import React, { useEffect, useState } from "react";

const StopWatch = () => {
  let [timings, setTimings] = useState({
    second: 0,
    minute: 0,
    hours: 0,
    milliseconds: 0,
  });
  let [startStopwatch, setStartStopwatch] = useState(false);

  useEffect(() => {
    let intervals;
    if (startStopwatch) {
      intervals = setInterval(() => {
        setTimings((initialState) => {
          if (initialState.milliseconds === 900) {
            if (initialState.minute === 59 && initialState.second === 59) {
              return {
                second: 0,
                minute: 0,
                hours: initialState.hours + 1,
                milliseconds: 0,
              };
            } else {
              if (initialState.second === 59) {
                return {
                  second: 0,
                  minute: initialState.minute + 1,
                  hours: initialState.hours,
                  milliseconds: 0,
                };
              } else {
                return {
                  second: initialState.second + 1,
                  minute: initialState.minute,
                  hours: initialState.hours,
                  milliseconds: 0,
                };
              }
            }
          } else {
            return {
              second: initialState.second,
              minute: initialState.minute,
              hours: initialState.hours,
              milliseconds: initialState.milliseconds + 100,
            };
          }
        });
      }, 100);
    } else {
      clearInterval(intervals);
    }
    return () => {
      clearInterval(intervals);
    };
  }, [startStopwatch]);

  const setResetTimer = () => {
    setStartStopwatch(false);
    setTimings({
      second: 0,
      minute: 0,
      hours: 0,
    });
  };

  return (
    <>
      <div>
        <h1>
          {timings.hours}h:{timings.minute}m:{timings.second}s:
          {timings.milliseconds}ms
        </h1>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setStartStopwatch(true)}>Start</button>
        <button onClick={() => setStartStopwatch(false)}>Stop</button>
        <button onClick={() => setResetTimer()}>Reset</button>
      </div>
    </>
  );
};

export default StopWatch;

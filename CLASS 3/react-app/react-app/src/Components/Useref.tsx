import { useRef, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<number | null>(null); // Store the interval ID

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = window.setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000); // Update the count every second
    }
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;

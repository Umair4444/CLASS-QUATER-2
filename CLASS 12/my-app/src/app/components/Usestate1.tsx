"use client";

import { useState } from "react";

const Usestate1 = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 2);
  };

  const handleDecrement = () => {
    setCount(count - 2);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col justify-center space-y-2 bg-slate-500 items-center h-screen">
      <h1 className="text-3xl font-bold mb-3">UseState</h1>

      <button
        onClick={handleIncrement}
        className="border-2 bg-green-600 text-white p-3 rounded-lg"
      >
        Increment by + 2
      </button>

      <button
        onClick={handleDecrement}
        className="border-2 bg-red-800 text-white p-3 rounded-lg"
      >
        Decrement by - 2
      </button>

      <button
        onClick={handleReset}
        className="border-2 bg-blue-800 text-white p-3 rounded-lg"
      >
        Reset Value to 0
      </button>

      <h1 className="text-5xl font-bold">{count}</h1>
    </div>
  );
};

export default Usestate1;

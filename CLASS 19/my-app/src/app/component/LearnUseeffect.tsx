"use client";
import React, { useEffect, useState } from "react";

const LearnUseeffect = () => {
  const [loading, setLoading] = useState(true);
  const [timer, setTimer] = useState(10);

  //   useEffect(() => {
  //     // console.log("hello from use effect");
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 2000);
  //   }, []);

  useEffect(() => {
    setTimeout(() => {
      setTimer(timer - 1);
      if (timer == 0) {
        alert("TimeOut");
      }
    }, 500);
  }, [timer]);

  return (
    <>
      <div>LearnUseeffect</div>
      <div>
        {loading ? (
          <h1 className="text-red-500">Please Wait</h1>
        ) : (
          <h1 className="text-green-500">I am Here</h1>
        )}
      </div>

      <div>{timer > 0 ? timer : <h1>Timer Over!</h1>}</div>
    </>
  );
};

export default LearnUseeffect;

import React from "react";
import { useEffect } from "react";

const Timer = () => {
  let count = 0;

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      count++;
      console.log(count);
    }, 1000);

    return () => {
      console.log("end..");
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>timer</h1>
    </div>
  );
};

export default Timer;

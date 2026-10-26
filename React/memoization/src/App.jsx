import React, { useCallback, useMemo, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  console.log("app rendering...");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "Varun",
    age: 34,
  });

  let greet = useCallback(() => {
    console.log("good afternoon");
  }, [user]);

  let expensiveCalculation = () => {
    console.log("calculation running...");
    let value = 0;
    for (let i = 0; i < 1000000000; i++) {
      value++;
    }

    return value;
  };

  let val = useMemo(expensiveCalculation, []);

  return (
    <div>
      <h1>Count is {count}</h1>
      <h1>Value is {val}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setUser({ ...user, name: "polo" })}>
        change user
      </button>

      <Home greet={greet} />
      <About />
    </div>
  );
};

export default App;

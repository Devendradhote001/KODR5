import { useEffect } from "react";
import Home from "./components/Home";
import { useState } from "react";
import Timer from "./components/Timer";

const App = () => {
  console.log("App rendering...");

  const [count, setCount] = useState(0);




  useEffect(() => {
    console.log("good morning...");
  }, []);

  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h1>Hello - {count}</h1>
      <button onClick={() => setToggle((prev) => !prev)}>Timer</button>

      <button onClick={() => setCount(count + 1)}>Incr</button>

      <Home />
      {toggle && <Timer />}
    </div>
  );
};

export default App;

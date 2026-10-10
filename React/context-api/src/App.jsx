import { useState } from "react";
import About from "./components/About";
import Home from "./components/Home";
import { ContextProvider } from "./context/MyContext";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  console.log("app rendering..");
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>count - {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;

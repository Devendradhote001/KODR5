import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "./features/counterReducer";
import { useState } from "react";

const App = () => {
  console.log("app rendering..");
  let { count } = useSelector((store) => store.counter);
  let dispatch = useDispatch();

  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>Count is {count}</h1>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Value"
      />
      <button onClick={() => dispatch(incrementByValue(value))}>Add</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;

import React from "react";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
  let { setToggle } = useContext(MyStore);

  return (
    <div className="flex justify-between items-center px-10 py-2 bg-blue-700 text-white">
      <h1>Logo</h1>

      <div className="flex gap-5">
        <p>Home</p>
        <p>About</p>
      </div>

      <button onClick={() => setToggle((prev) => !prev)}>Cart</button>
    </div>
  );
};

export default Navbar;

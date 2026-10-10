import React from "react";
import { useContext } from "react";
import { Store } from "../context/MyContext";

const Navbar = () => {
  let { toggle, setToggle } = useContext(Store);

  return (
    <nav className="bg-blue-700 text-white flex items-center justify-between px-8 py-2">
      <h1>Logo</h1>

      <div className="flex gap-5">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>

      <button
        onClick={() => setToggle((prev) => !prev)}
        className="py-2 px-6 cursor-pointer bg-black text-white rounded border-0"
      >
        {toggle ? "Close" : "Create"}
      </button>
    </nav>
  );
};

export default Navbar;

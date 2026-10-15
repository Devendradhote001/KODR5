import React from "react";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { NavLink } from "react-router";

const Navbar = () => {
  let { setToggle } = useContext(MyStore);

  return (
    <div className="flex justify-between items-center px-10 py-2 bg-blue-700 text-white">
      <h1>Logo</h1>

      <div className="flex gap-5">
        <p>Home</p>
        <p>About</p>
        <NavLink to={"/product"}>Product</NavLink>
      </div>
      <NavLink to={"/cart"}>Cart</NavLink>
    </div>
  );
};

export default Navbar;

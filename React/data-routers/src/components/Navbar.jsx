import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between p-3">
      <h1>Logo</h1>

      <div className="flex gap-5">
        <NavLink to={"/main"}>Home</NavLink>
        <NavLink to={"/main/about"}>About</NavLink>
        <NavLink to={"/main/product"}>Product</NavLink>
      </div>

      <button>Sign in</button>
    </div>
  );
};

export default Navbar;

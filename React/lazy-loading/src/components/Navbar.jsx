import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <h1>Logo</h1>

      <div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
    </div>
  );
};

export default Navbar;

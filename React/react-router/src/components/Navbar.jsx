import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-3 ">
      <h1>Logo</h1>

      <div className="flex gap-5">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-600" : "text-black"
          }
          to={"/home"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-600" : "text-black"
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-600" : "text-black"
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </div>

      <p>Login</p>
    </nav>
  );
};

export default Navbar;

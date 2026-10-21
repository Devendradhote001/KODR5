import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="p-4 flex flex-col justify-between">
      <div className="flex gap-6 flex-col">
        <h1>Logo</h1>

        <div className="flex flex-col gap-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-gray-600"
            }
            to={"/main"}
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-gray-600"
            }
            to={"/main/products"}
          >
            Product
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-black font-semibold" : "text-gray-600"
            }
            to={"/main/users"}
          >
            Users
          </NavLink>
        </div>
      </div>

      <button className="p-2 bg-black text-white border-none rounded cursor-pointer">
        Logout
      </button>
    </div>
  );
};

export default Navbar;

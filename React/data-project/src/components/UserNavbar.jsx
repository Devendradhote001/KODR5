import React from "react";
import { NavLink } from "react-router";

const UserNavbar = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-black font-semibold" : "text-gray-600"
        }
        to={"/main/users"}
        end
      >
        All Users
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-black font-semibold" : "text-gray-600"
        }
        to={"/main/users/create"}
      >
        Create User
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-black font-semibold" : "text-gray-600"
        }
        to={"/main/users/history"}
      >
        History
      </NavLink>
    </div>
  );
};

export default UserNavbar;

import React from "react";
import { Outlet } from "react-router";
import UserNavbar from "../../components/UserNavbar";

const UserLayout = () => {
  return (
    <div className="grid h-screen grid-cols-[1fr_6fr]">
      <UserNavbar />
      <div className="border-l border-gray-500 p-4 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;

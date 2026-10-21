import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar";

const MainLayout = () => {
  return (
    <div className="grid h-screen grid-cols-[1fr_6fr]">
      <Navbar />
      <div className="border-l border-gray-500 p-4 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

import React from "react";
import { Outlet } from "react-router";

const Something = () => {
  return (
    <div>
      <h1>i m nested in about route</h1>
      <Outlet />
    </div>
  );
};

export default Something;

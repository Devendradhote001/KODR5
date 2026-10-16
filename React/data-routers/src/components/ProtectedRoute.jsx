import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  console.log("protected route");
  if (false) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

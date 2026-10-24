import React from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  let { user } = useSelector((store) => store.auth);

  if (!user) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};
jj
export default ProtectedRoute;

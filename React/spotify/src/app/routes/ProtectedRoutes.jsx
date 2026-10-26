import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  let { user, isLoading } = useSelector((store) => store.auth);

  if (isLoading)
    return (
      <div className="h-screen bg-black text-white">
        <h1>Loading...</h1>
      </div>
    );

  if (!user) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;

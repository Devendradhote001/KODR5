import React, { Activity, useState } from "react";
import { Outlet } from "react-router";
import Login from "../AuthPages/Login";
import Register from "../AuthPages/Register";
import { useAuth } from "../../hooks/useAuth";

const AuthLayout = () => {
  let { toggle } = useAuth();

  return (
    <>
      <Activity mode={toggle ? "visible" : "hidden"}>
        <Register />
      </Activity>
      <Activity mode={!toggle ? "visible" : "hidden"}>
        <Login />
      </Activity>
    </>
  );
};

export default AuthLayout;

import React from "react";
import { Outlet } from "react-router";

const AboutPage = () => {
  return (
    <div>
      <h1>Hello about</h1>
      <Outlet />
    </div>
  );
};

export default AboutPage;

import React from "react";

const About = ({ user }) => {
  console.log("About rendering...");

  return (
    <div>
      <h1>User</h1>
      <h1>About components</h1>
    </div>
  );
};

export default React.memo(About);

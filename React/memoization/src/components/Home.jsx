import React from "react";

const Home = ({ greet }) => {
  console.log("Home rendering...");

  greet();

  return (
    <div>
      <h1>Hello Home</h1>
    </div>
  );
};

export default React.memo(Home);

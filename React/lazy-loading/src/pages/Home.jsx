import React, { useEffect, useState } from "react";

const Home = () => {
  const [scrollValue, setScrollValue] = useState(null);
  console.log(scrollValue);

  useEffect(() => {
    let lastTime = Date.now(); //currentTime

    let handleScroll = (e) => {
      let currentTime = Date.now();

      if (currentTime - lastTime >= 2000) {
        console.log("throttling running..");
        setScrollValue(currentTime);
        lastTime = currentTime;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen flex flex-col gap-10">
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
      <h1>Home component</h1>
    </div>
  );
};

export default Home;

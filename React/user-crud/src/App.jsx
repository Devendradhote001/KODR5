import React from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";
import { useState } from "react";
import { useContext } from "react";
import { Store } from "./context/MyContext";

const App = () => {
  let { toggle, usersData } = useContext(Store);

  return (
    <div className="h-screen bg-black flex flex-col gap-4">
      <Navbar />

      {toggle ? (
        <Form />
      ) : (
        <div className="h-full p-4 flex gap-4">
          {usersData.map((val) => (
            <UserCard key={val.id} user={val} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

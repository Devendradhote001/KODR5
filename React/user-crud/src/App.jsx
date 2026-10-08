import React from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";
import { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [usersData, setUsersData] = useState([]);

  let handleDelete = (id) => {
    // let arr = usersData.filter((val) => val.id !== id);
    // setUsersData(arr);

    setUsersData((prev) => prev.filter((val) => val.id !== id));
  };

  return (
    <div className="h-screen bg-black flex flex-col gap-4">
      <Navbar setToggle={setToggle} toggle={toggle} />

      {toggle ? (
        <Form setUsersData={setUsersData} setToggle={setToggle} />
      ) : (
        <div className="h-full p-4 flex gap-4">
          {usersData.map((val) => (
            <UserCard user={val} handleDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

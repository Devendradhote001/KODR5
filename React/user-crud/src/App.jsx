import React from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";
import { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [usersData, setUsersData] = useState(
    JSON.parse(localStorage.getItem("usersArr")) || [],
  );
  const [isEditedUser, setIsEditedUser] = useState(null);

  let handleDelete = (id) => {
    let arr = usersData.filter((val) => val.id !== id);
    setUsersData(arr);
    localStorage.setItem("usersArr", JSON.stringify(arr));

    // setUsersData((prev) => prev.filter((val) => val.id !== id));
  };

  return (
    <div className="h-screen bg-black flex flex-col gap-4">
      <Navbar setToggle={setToggle} toggle={toggle} />

      {toggle ? (
        <Form
          usersData={usersData}
          setIsEditedUser={setIsEditedUser}
          setUsersData={setUsersData}
          setToggle={setToggle}
          isEditedUser={isEditedUser}
        />
      ) : (
        <div className="h-full p-4 flex gap-4">
          {usersData.map((val) => (
            <UserCard
              setToggle={setToggle}
              user={val}
              handleDelete={handleDelete}
              setIsEditedUser={setIsEditedUser}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

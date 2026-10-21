import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import UserCard from "../../components/UserCard";

const AllUser = () => {
  const [usersData, setUsersData] = useState([]);

  let getAllUsers = async () => {
    try {
      let response = await axiosInstance.get("/users");
      console.log(response);
      setUsersData(response.data.users);
    } catch (error) {
      console.log("error in fetching users", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-2">
      {usersData.map((val) => (
        <UserCard user={val} />
      ))}
    </div>
  );
};

export default AllUser;

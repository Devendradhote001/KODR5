import { axiosInstance } from "../config/axiosInstance";

export let getAllUsersApi = async () => {
  try {
    let response = await axiosInstance.get("/users");
    return response.data;
  } catch (error) {
    console.log("error in fetching users", error);
  }
};

export let createUserApi = async (data) => {
  try {
    let response = await axiosInstance.post("/users/add", data);
    return response.data;
  } catch (error) {
    console.log("error in create user api", error);
  }
};

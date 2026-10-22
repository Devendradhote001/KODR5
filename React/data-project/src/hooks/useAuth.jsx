import { useState } from "react";
import { useForm } from "react-hook-form";
import { useContextData } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createUserApi, getAllUsersApi } from "../api/userApi";

export const useAuth = () => {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  let {
    setRegisteredUsers,
    registeredUsers,
    setLoggedInUser,
    toggle,
    setToggle,
  } = useContextData();

  let { register, handleSubmit, reset } = useForm();

  let handleRegisterFormSubmit = (data) => {
    let arr = [...registeredUsers, { id: Date.now(), ...data }];
    setRegisteredUsers(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    toast.success("User registered");
    navigate("/");
    reset();
  };

  let handleLoginFormSubmit = (data) => {
    let isExist = registeredUsers.find((val) => val.email === data.email);

    let user = registeredUsers.find(
      (val) => val.email === data.email && val.password === data.password,
    );

    if (!isExist) {
      toast.error("user not found");
      return;
    }

    if (!user) {
      toast.error("Invalid credentials");
      return;
    }

    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("Login successful");
    navigate("/main");
    reset();
  };

  return {
    register,
    handleSubmit,
    handleRegisterFormSubmit,
    handleLoginFormSubmit,
    showPassword,
    setShowPassword,
    toggle,
    setToggle,
  };
};


// this is for get
export const fetchUser = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: getAllUsersApi,
    staleTime: Infinity,
  });


  // for post
export const createUser = () => {
  const mutation = useMutation({
    mutationKey: ["add user"],
    mutationFn: (data) => createUserApi(data),
  });

  return mutation;
};

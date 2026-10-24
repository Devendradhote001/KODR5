import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginApi } from "../api/authApi";

export const useAuth = () => {
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  let handleLoginForm = async (data) => {
    let response = await loginApi(data);
    console.log(response);
    localStorage.setItem("accessToken", JSON.stringify(response.accessToken));
    
  };

  let handleRegisterForm = (data) => {
    console.log("register data", data);
  };

  return {
    handleLoginForm,
    handleRegisterForm,
    register,
    handleSubmit,
    errors,
    showPassword,
    setShowPassword,
    navigate,
  };
};

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { loginApi } from "../api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../state/authSlice";
import { loginApiAction } from "../state/authAction";

export const useAuth = () => {
  const [showPassword, setShowPassword] = useState(false);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  let handleLoginForm = (data) => {
    dispatch(loginApiAction(data));
    navigate("/main");
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

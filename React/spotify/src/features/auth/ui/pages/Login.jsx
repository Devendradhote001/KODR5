import React, { useState } from "react";
import { Music2, Mail, Lock, Eye, EyeOff, Apple } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const Login = ({ onSwitch }) => {
  let {
    register,
    handleLoginForm,
    handleSubmit,
    showPassword,
    setShowPassword,
    errors,
    navigate,
  } = useAuth();

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center px-5 py-10 sm:py-12">
      <div className="w-full max-w-[450px]">
        <div className="flex justify-center mb-8">
          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
            <Music2 size={29} strokeWidth={3} className="text-black" />
          </div>
        </div>

        <h1 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-10">
          Log in to
          <br />
          start listening
        </h1>

        <form onSubmit={handleSubmit(handleLoginForm)} className="space-y-6">
          <div>
            <label className="block text-sm font-bold mb-2">
              Email address
            </label>
            <div className="relative">
              <Mail
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
              />
              <input
                {...register("username", {
                  required: "username is required",
                })}
                type="text"
                placeholder="name@domain.com"
                className="w-full h-14 bg-transparent border border-neutral-500 rounded-md pl-12 pr-4 outline-none focus:border-white focus:ring-1 focus:ring-white hover:border-white transition"
              />
            </div>
            {errors.username && (
              <p className="text-red-600">{errors.username.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Password</label>
            <div className="relative">
              <Lock
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
              />
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type={"password"}
                placeholder="Enter your passwo  rd"
                className="w-full h-14 bg-transparent border border-neutral-500 rounded-md pl-12 pr-12 outline-none focus:border-white focus:ring-1 focus:ring-white hover:border-white transition"
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full h-14 rounded-full bg-[#1ed760] text-black font-bold text-lg hover:bg-[#3be477] hover:scale-[1.01] active:scale-[0.99] transition"
          >
            Log in
          </button>
        </form>

        <button
          type="button"
          className="block mx-auto mt-6 text-sm underline underline-offset-4 hover:text-[#1ed760]"
        >
          Forgot your password?
        </button>

        <div className="flex items-center gap-4 my-8">
          <div className="h-px bg-neutral-700 flex-1" />
          <span className="text-neutral-400 text-sm">or</span>
          <div className="h-px bg-neutral-700 flex-1" />
        </div>

        <div className="space-y-3">
          <button
            type="button"
            className="relative w-full h-14 rounded-full border border-neutral-500 font-bold hover:border-white hover:bg-white/5 transition"
          >
            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xl font-extrabold text-[#4285F4]">
              G
            </span>
            Continue with Google
          </button>

          <button
            type="button"
            className="relative w-full h-14 rounded-full border border-neutral-500 font-bold hover:border-white hover:bg-white/5 transition"
          >
            <Apple
              size={23}
              fill="white"
              className="absolute left-6 top-1/2 -translate-y-1/2"
            />
            Continue with Apple
          </button>
        </div>

        <div className="text-center mt-12 pb-6">
          <p className="text-neutral-400 mb-4">Don't have an account?</p>
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="font-bold underline underline-offset-4 hover:text-[#1ed760] transition"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

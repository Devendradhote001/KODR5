import React, { useState } from "react";
import {
  Music2,
  Smartphone,
  Apple,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const Register = ({ onSwitch }) => {
  let {
    register,
    handleRegisterForm,
    handleSubmit,
    errors,
    navigate,
    showPassword,
    setShowPassword,
  } = useAuth();

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center px-5 py-10 sm:py-12">
      <div className="w-full max-w-[450px]">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
            <Music2 size={29} strokeWidth={3} className="text-black" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-center text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-9">
          Sign up to
          <br />
          start listening
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit(handleRegisterForm)} className="space-y-5">
          <div>
            <label className="block text-sm font-bold mb-2">Your name</label>
            <div className="relative">
              <User
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
              />
              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                placeholder="Enter your name"
                className="w-full h-14 bg-transparent border border-neutral-500 rounded-md pl-12 pr-4 outline-none focus:border-white focus:ring-1 focus:ring-white hover:border-white transition"
              />
            </div>
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>

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
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter valid email",
                  },
                })}
                type="email"
                placeholder="name@domain.com"
                className="w-full h-14 bg-transparent border border-neutral-500 rounded-md pl-12 pr-4 outline-none focus:border-white focus:ring-1 focus:ring-white hover:border-white transition"
              />
            </div>
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
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
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters is required",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                className="w-full h-14 bg-transparent border border-neutral-500 rounded-md pl-12 pr-12 outline-none focus:border-white focus:ring-1 focus:ring-white hover:border-white transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
            <p className="text-xs text-neutral-400 mt-2">
              Use at least 8 characters.
            </p>
          </div>

          <button
            type="submit"
            className="w-full h-14 rounded-full bg-[#1ed760] text-black font-bold text-lg hover:bg-[#3be477] hover:scale-[1.01] active:scale-[0.99] transition"
          >
            Create account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-7">
          <div className="h-px bg-neutral-700 flex-1" />
          <span className="text-neutral-400 text-sm">or</span>
          <div className="h-px bg-neutral-700 flex-1" />
        </div>

        {/* Social buttons */}
        <div className="space-y-3">
          <button
            type="button"
            className="relative w-full h-14 rounded-full border border-neutral-500 font-bold hover:border-white hover:bg-white/5 transition"
          >
            <Smartphone
              size={21}
              className="absolute left-6 top-1/2 -translate-y-1/2"
            />
            Sign up with phone number
          </button>

          <button
            type="button"
            className="relative w-full h-14 rounded-full border border-neutral-500 font-bold hover:border-white hover:bg-white/5 transition"
          >
            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xl font-extrabold text-[#4285F4]">
              G
            </span>
            Sign up with Google
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
            Sign up with Apple
          </button>
        </div>

        {/* Login link */}
        <div className="text-center mt-12 pb-6">
          <p className="text-neutral-400 mb-4">Already have an account?</p>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="font-bold underline underline-offset-4 hover:text-[#1ed760] transition"
          >
            Log in
          </button>
        </div>

        <p className="text-center text-[11px] text-neutral-500 leading-5">
          This site is protected by reCAPTCHA and the Google Privacy Policy and
          Terms of Service apply.
        </p>
      </div>
    </div>
  );
};

export default Register;

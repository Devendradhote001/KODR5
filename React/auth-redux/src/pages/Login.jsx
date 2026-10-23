import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";

const Login = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  let formData = {};

  let registerUsers = JSON.parse(localStorage.getItem("registerUsers"));

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = registerUsers.find(
      (val) =>
        val.email === formData.email && val.password === formData.password,
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    dispatch(addUser(user));
    navigate("/main");
    alert("user logged in");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl grid md:grid-cols-2">
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-800 p-12 text-white">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-xl font-bold">
                A
              </div>
              <span className="text-xl font-bold tracking-wide">
                AdminPanel
              </span>
            </div>

            <div className="mt-24">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-200">
                Admin Dashboard
              </p>
              <h1 className="text-4xl font-bold leading-tight">
                Manage your business with confidence.
              </h1>
              <p className="mt-5 max-w-sm leading-7 text-indigo-100">
                Access your dashboard, manage your team, and keep everything
                running smoothly from one place.
              </p>
            </div>
          </div>

          <p className="text-sm text-indigo-200">
            © 2026 AdminPanel. All rights reserved.
          </p>
        </div>

        {/* Login Form */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-12">
          <div className="w-full max-w-md">
            <div className="mb-10 md:hidden">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
                A
              </div>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">
                AdminPanel
              </h2>
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Welcome back
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Sign in to your account
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Enter your details to access your admin dashboard.
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email address
                </label>
                <div className="relative">
                  <Mail
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    onChange={(e) => (formData.email = e.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>
                </div>

                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="password"
                    onChange={(e) => (formData.password = e.target.value)}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 active:scale-[0.99]"
              >
                Sign In
                <ArrowRight size={18} />
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

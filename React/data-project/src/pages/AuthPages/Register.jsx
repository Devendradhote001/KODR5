import { Link } from "react-router";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {
  let {
    register,
    handleSubmit,
    handleRegisterFormSubmit,
    showPassword,
    setShowPassword,
    setToggle,
  } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">
        {/* Left Section */}
        <div className="hidden flex-col justify-between bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-800 p-12 text-white md:flex">
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
                Get started today
              </p>
              <h1 className="text-4xl font-bold leading-tight">
                Your workspace, organized your way.
              </h1>
              <p className="mt-5 max-w-sm leading-7 text-indigo-100">
                Create your account to manage your dashboard and simplify your
                everyday workflow.
              </p>
            </div>
          </div>

          <p className="text-sm text-indigo-200">
            © 2026 AdminPanel. All rights reserved.
          </p>
        </div>

        {/* Register Form */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-12">
          <div className="w-full max-w-md">
            <div className="mb-8 md:hidden">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
                A
              </div>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">
                AdminPanel
              </h2>
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Create account
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Get started for free
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Fill in your details to create your account.
            </p>

            <form
              className="mt-8 space-y-5"
              onSubmit={handleSubmit(handleRegisterFormSubmit)}
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Full name
                </label>
                <div className="relative">
                  <User
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    {...register("name")}
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>
              </div>

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
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    {...register("password")}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    autoComplete="new-password"
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
                Create Account
                <ArrowRight size={18} />
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                // to="/"
                onClick={() => setToggle((prev) => !prev)}
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

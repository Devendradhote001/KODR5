import { UserRound, Calendar, UserPlus } from "lucide-react";
import { createUser } from "../../hooks/useAuth";

const CreateUser = () => {
  let mutation = createUser();
  let formData = {};

  let handleSubmit = async (e) => {
    e.preventDefault();
    const response = await mutation.mutateAsync(formData);
    console.log(response);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-5">
      <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-7 text-white">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
            <UserPlus size={25} />
          </div>

          <h1 className="mt-5 text-2xl font-bold">Create New User</h1>
          <p className="mt-2 text-sm text-indigo-100">
            Fill in the details to add a new user.
          </p>
        </div>

        {/* Form UI */}
        <form onSubmit={handleSubmit} className="space-y-6 p-8">
          {/* First Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              First Name
            </label>
            <div className="relative">
              <UserRound
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                onChange={(e) => (formData.firstName = e.target.value)}
                type="text"
                placeholder="Enter first name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Last Name
            </label>
            <div className="relative">
              <UserRound
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                onChange={(e) => (formData.lastName = e.target.value)}
                type="text"
                placeholder="Enter last name"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>
          </div>

          {/* Age */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Age
            </label>
            <div className="relative">
              <Calendar
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                onChange={(e) => (formData.age = e.target.value)}
                type="number"
                placeholder="Enter age"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>
          </div>

          {/* Button */}
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700">
            <UserPlus size={19} />
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;

// 1. multiple state
// 2. single state with one object
// 3. single state with single handleChange function
// 4. react hook form
// 5. useRef multiple / single
// 6. javascript method

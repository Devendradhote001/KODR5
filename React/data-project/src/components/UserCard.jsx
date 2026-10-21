import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  GraduationCap,
  ArrowUpRight,
  MoreHorizontal,
  ShieldCheck,
} from "lucide-react";

const UserCard = ({ user, onView, onEdit, onDelete }) => {
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Top Banner */}
      <div className="relative h-28 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-700">
        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white">
          <MoreHorizontal size={21} />
        </div>

        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold capitalize text-white backdrop-blur">
          {user.role}
        </span>
      </div>

      {/* User Info */}
      <div className="px-5 pb-5">
        <div className="-mt-11 flex items-end justify-between">
          <img
            src={user.image}
            alt={fullName}
            className="h-20 w-20 rounded-2xl border-4 border-white bg-slate-100 object-cover shadow-md"
          />

          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Active
          </span>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-bold text-slate-900">{fullName}</h2>

          <p className="mt-1 text-sm text-slate-500">@{user.username}</p>

          <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
            <ShieldCheck size={15} />
            {user.company?.title || "Team Member"}
          </div>
        </div>

        {/* Contact Details */}
        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
              <Mail size={17} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-slate-400">
                Email Address
              </p>
              <p className="mt-1 truncate text-sm font-medium text-slate-700">
                {user.email}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
              <Phone size={17} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-slate-400">Phone Number</p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                {user.phone}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
              <Building2 size={17} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-slate-400">
                Department & Company
              </p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                {user.company?.department || "Not specified"}
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                {user.company?.name || "No company"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
              <MapPin size={17} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-slate-400">Location</p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                {user.address?.city}, {user.address?.stateCode}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
              <GraduationCap size={17} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-slate-400">University</p>
              <p className="mt-1 truncate text-sm font-medium text-slate-700">
                {user.university || "Not specified"}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3 border-t border-slate-100 pt-5">
          <button
            type="button"
            onClick={() => onView?.(user)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
          >
            View Profile
            <ArrowUpRight size={16} />
          </button>

          <button
            type="button"
            onClick={() => onEdit?.(user)}
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Edit
          </button>

          <button
            type="button"
            onClick={() => onDelete?.(user)}
            className="rounded-xl border border-rose-100 px-4 py-3 text-sm font-semibold text-rose-600 transition hover:bg-rose-50"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;

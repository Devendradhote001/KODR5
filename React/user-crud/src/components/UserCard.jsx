import React from "react";

const UserCard = ({ user, handleDelete, setIsEditedUser, setToggle }) => {
  return (
    <div className="w-[20%] text-white border-2 border-white flex flex-col gap-2 p-2 rounded">
      <div className="h-[75%] w-full">
        <img
          className="h-full w-full object-cover rounded"
          src={user.imageUrl}
          alt=""
        />
      </div>
      <div>
        <h1>{user.name}</h1>
        <p className="text-sm text-gray-200">{user.email}</p>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => {
            setToggle(true);
            setIsEditedUser(user);
          }}
          className="p-1 bg-yellow-600 text-white rounded"
        >
          Update
        </button>
        <button
          onClick={() => handleDelete(user.id)}
          className="p-1 bg-red-600 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;

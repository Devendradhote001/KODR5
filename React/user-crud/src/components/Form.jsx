import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { Store } from "../context/MyContext";

const Form = () => {
  let { setToggle, setUsersData, isEditedUser, setIsEditedUser } =
    useContext(Store);

  const [formData, setFormData] = useState(
    isEditedUser
      ? isEditedUser
      : {
          name: "",
          email: "",
          imageUrl: "",
        },
  );

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (isEditedUser) {
      setUsersData((prev) => {
        let updatedArr = prev.map((val) =>
          val.id === isEditedUser.id ? { ...val, ...formData } : val,
        );
        localStorage.setItem("usersArr", JSON.stringify(updatedArr));
        return updatedArr;
      });

      setIsEditedUser(null);
    } else {
      let arr = [...usersData, { ...formData, id: nanoid() }];
      setUsersData(arr);
      localStorage.setItem("usersArr", JSON.stringify(arr));
    }

    setFormData({
      name: "",
      email: "",
      imageUrl: "",
    });
    setToggle(false);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5 text-white">
      <h1 className="text-4xl">User Registration</h1>
      <form
        onSubmit={handleSubmit}
        action=""
        className="border p-4 rounded-xl w-[40%] border-white text-white flex flex-col gap-2 "
      >
        <input
          required
          value={formData.name}
          onChange={handleChange}
          name="name"
          className="border border-white rounded p-2 outline-0"
          type="text"
          placeholder="Name"
        />
        <input
          required
          value={formData.email}
          onChange={handleChange}
          name="email"
          className="border border-white rounded p-2 outline-0"
          type="email"
          placeholder="Email"
        />
        <input
          required
          value={formData.imageUrl}
          onChange={handleChange}
          name="imageUrl"
          className="border border-white rounded p-2 outline-0"
          type="url"
          placeholder="Image url"
        />
        <button className="p-2 bg-blue-700 text-white rounded cursor-pointer">
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;

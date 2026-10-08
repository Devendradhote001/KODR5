import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-5">
      <h1>Form Handling...</h1>

      {/* <div>
        <h1>Name - {nameInp}</h1>
      </div> */}

      <form
        onSubmit={handleSubmit}
        className="bg-black flex flex-col w-100 p-5 rounded-xl gap-4"
        action=""
      >
        <input
          name="name"
          onChange={handleChange}
          className="p-2 border border-white outline-0 "
          type="text"
          placeholder="Name"
        />
        <input
          name="email"
          onChange={handleChange}
          className="p-2 border border-white outline-0 "
          type="text"
          placeholder="Email"
        />
        <input
          name="password"
          onChange={handleChange}
          className="p-2 border border-white outline-0 "
          type="text"
          placeholder="password"
        />
        <button className="p-2 bg-blue-700 text-white rounded-xl border-0 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;

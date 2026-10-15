import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";

const Home = () => {
  let navigate = useNavigate();
  let { setLoggedInUser } = useContext(Auth);
  return (
    <div>
      <h1>This is home jo ki protected hai</h1>
      <button
        onClick={() => {
          localStorage.removeItem("loggedInUser");
          setLoggedInUser(null);
          navigate("/");
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default Home;

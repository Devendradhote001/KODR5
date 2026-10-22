import { createContext, useContext, useState } from "react";

const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")),
  );

  // console.log("registered users->", registeredUsers);
  // console.log("logged in users ->", loggedInUser);

  return (
    <Auth.Provider
      value={{
        registeredUsers,
        setRegisteredUsers,
        loggedInUser,
        setLoggedInUser,
        setToggle,
        toggle,
      }}
    >
      {children}
    </Auth.Provider>
  );
};

// hook

export const useContextData = () => useContext(Auth);

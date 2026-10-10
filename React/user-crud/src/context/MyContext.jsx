import { useState } from "react";
import { createContext } from "react";

export let Store = createContext();

export const StoreProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const [usersData, setUsersData] = useState(
    JSON.parse(localStorage.getItem("usersArr")) || [],
  );

  const [isEditedUser, setIsEditedUser] = useState(null);

  let handleDelete = (id) => {
    let arr = usersData.filter((val) => val.id !== id);
    setUsersData(arr);
    localStorage.setItem("usersArr", JSON.stringify(arr));

    // setUsersData((prev) => prev.filter((val) => val.id !== id));
  };

  return (
    <Store.Provider
      value={{
        toggle,
        setToggle,
        usersData,
        setUsersData,
        isEditedUser,
        setIsEditedUser,
        handleDelete,
      }}
    >
      {children}
    </Store.Provider>
  );
};

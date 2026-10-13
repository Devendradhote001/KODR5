import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

export let MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(null);
  const [toggle, setToggle] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems);

  let getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setProductsData(res.data);
    } catch (error) {
      console.log("error in api ", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <MyStore.Provider
      value={{
        productsData,
        setProductsData,
        toggle,
        setToggle,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};

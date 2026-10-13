import React from "react";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const CartScreen = () => {
  let { cartItems } = useContext(MyStore);

  return (
    <div className="h-screen w-full px-8 py-2">
      {cartItems.map((val) => (
        <h1>{val.title}</h1>
      ))}
    </div>
  );
};

export default CartScreen;

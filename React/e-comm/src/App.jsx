import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import CartScreen from "./pages/CartScreen";
import ProductScreen from "./pages/ProductScreen";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="cart" element={<CartScreen />} />
        <Route path="product" element={<ProductScreen />} />
      </Routes>
    </div>
  );
};

export default App;

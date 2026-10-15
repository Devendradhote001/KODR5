import React from "react";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";
import ProductCard from "../components/ProductCard";

const ProductScreen = () => {
  let { productsData } = useContext(MyStore);

  return (
    <div className="p-8 grid grid-cols-3 gap-4">
      {productsData.map((val) => (
        <ProductCard product={val} />
      ))}
    </div>
  );
};

export default ProductScreen;

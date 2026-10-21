import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { axiosInstance } from "../../config/axiosInstance";
import { getAllProductsApi } from "../../api/productApi";

const ProductPage = () => {
  const [productsData, setProductsData] = useState([]);

  let getProducts = async () => {
    let data = await getAllProductsApi();
    console.log(data);
    setProductsData(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      {productsData.map((val) => (
        <ProductCard key={val.id} product={val} />
      ))}
    </div>
  );
};

export default ProductPage;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const ApiComp = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let getProductsData = async () => {
    try {
      setIsLoading(true);
      let res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setProductsData(res.data);
    } catch (error) {
      console.log("error in products api", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Api call</h1>
      <button>Call</button>

      {productsData.map((val) => (
        <h1 key={val.id}>{val.title}</h1>
      ))}
    </div>
  );
};

export default ApiComp;

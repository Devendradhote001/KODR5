import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  let { id } = useParams();

  const [productData, setProductData] = useState(null);

  let getSingleProductData = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProductData(res.data);
    } catch (error) {
      console.log("error in single product api", error);
    }
  };

  useEffect(() => {
    getSingleProductData();
  }, []);

  return (
    <div>
      <h1>This is product detail page</h1>

      <div>
        <img width={300} src={productData?.image} alt="" />
        <h1>{productData?.title}</h1>
      </div>
    </div>
  );
};

export default ProductDetail;

import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [filterProducts, setFilterProducts] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let getProducts = async () => {
    try {
      setIsLoading(true);
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("error in fetching products", error);
    } finally {
      setIsLoading(false);
    }
  };

  let filterProductsData = () => {
    let products = productsData.filter((val) =>
      val.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setFilterProducts(products);
    console.log("filter pro->", products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  let timeOut;

  useEffect(() => {
    if (searchValue !== null) {
      timeOut = setTimeout(() => {
        filterProductsData();
      }, 1000);
    }

    return () => clearTimeout(timeOut);
  }, [searchValue]);

  if (isLoading) return <h1>Loading products..</h1>;

  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <input
          onChange={(e) => setSearchValue(e.target.value)}
          className="p-2 border border-white"
          type="text"
          placeholder="Search"
        />
      </div>

      {filterProducts
        ? filterProducts.map((val) => <h1 key={val.id}>{val.title}</h1>)
        : productsData.map((val) => <h1 key={val.id}>{val.title}</h1>)}
    </div>
  );
};

export default App;

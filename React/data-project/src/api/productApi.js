import { axiosInstance } from "../config/axiosInstance";

export let getAllProductsApi = async () => {
  try {
    console.log("api function triggered...");
    let response = await axiosInstance.get("/products");
    return response.data;
  } catch (error) {
    console.log("error in products api", error);
  }
};

export let getSingleProductsApi = async (id) => {
  try {
    console.log("api function triggered...");
    let response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.log("error in products api", error);
  }
};

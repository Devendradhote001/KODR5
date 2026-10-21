import { axiosInstance } from "../config/axiosInstance";

export let getAllProductsApi = async () => {
  try {
    let response = await axiosInstance.get("/products");
    return response.data;
  } catch (error) {
    console.log("error in products api", error);
  }
};

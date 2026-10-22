import { useQuery } from "@tanstack/react-query";
import { getAllProductsApi } from "../api/productApi";

export const useProduct = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: getAllProductsApi,
    staleTime: Infinity,
  });

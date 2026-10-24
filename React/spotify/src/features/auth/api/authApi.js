import { api } from "../../../config/api";

export const loginApi = async (credentials) => {
  try {
    let res = await api.post("/auth/login", credentials);
    console.log("login response ->", res);
    return res.data;
  } catch (error) {
    console.log("error in login", error);
  }
};

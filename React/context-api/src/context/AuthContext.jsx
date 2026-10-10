import { createContext } from "react";

export let Auth = createContext();

export let AuthProvider = ({ children }) => {
  return <Auth.Provider>{children}</Auth.Provider>;
};

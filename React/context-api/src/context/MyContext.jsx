import { createContext } from "react";

export let MyStore = createContext();

export const ContextProvider = ({ children }) => {
  let data = "hero";
  return <MyStore.Provider value={data}>{children}</MyStore.Provider>;
};

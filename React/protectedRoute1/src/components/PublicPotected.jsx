import { useContext } from "react";
import { Navigate } from "react-router";
import { Auth } from "../context/AuthContext";

const PublicProtected = ({ children }) => {
  let { loggedInUser } = useContext(Auth);

  if (loggedInUser) {
    return <Navigate to={"/home"} />;
  }
  return children;
};

export default PublicProtected;

import { useContext } from "react";
import { Navigate } from "react-router";
import { Auth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  let { loggedInUser } = useContext(Auth);

  if (!loggedInUser) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default ProtectedRoute;

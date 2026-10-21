import { Navigate, Outlet } from "react-router";
import { useContextData } from "../context/AuthContext";

const ProtectedRoute = () => {
  let { loggedInUser } = useContextData();

  if (!loggedInUser) return <Navigate to={"/"} />;

  return <Outlet />;
};

export default ProtectedRoute;

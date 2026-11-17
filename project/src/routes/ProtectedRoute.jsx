import { useContext } from "react";
import { AuthStore } from "../context/AuthStore";
import { Outlet, Navigate } from "react-router";

const ProtectedRoute = () => {
  console.log("ProtectedRoute rendering...");

  const { logInUser } = useContext(AuthStore);

  if (!logInUser) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />
};

export default ProtectedRoute;

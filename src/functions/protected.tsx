import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface IQuestion {
  auth?: boolean;
}

const ProtectedRoute = ({ children }: any) => {
  let location = useLocation();
  const { auth }: IQuestion = useAuth();
  console.log(auth);
  if (!auth) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;

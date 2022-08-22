import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { DivLoading } from "./style";

const ProtectedRoute = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <DivLoading>Carregando informações...</DivLoading>;
  }

  return user ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoute;

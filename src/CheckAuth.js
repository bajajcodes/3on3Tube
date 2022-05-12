import { useAuth } from "context";
import { useLocation, Navigate } from "react-router-dom";

function CheckAuth({ children }) {
  const location = useLocation();
  const { authState } = useAuth();
  const to = location.state?.from ?? "/videos/explore";
  return authState.isLoggedIn ? <Navigate to={to} replace={true} /> : children;
}

export { CheckAuth };

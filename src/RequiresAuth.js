import { useAuth } from "context";
import { Navigate, useLocation } from "react-router-dom";

function RequiresAuth({ children }) {
  const {
    authState: { isLoggedIn },
  } = useAuth();
  const location = useLocation();
  const { pathname } = location;
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: pathname }} replace />
  );
}

export { RequiresAuth };

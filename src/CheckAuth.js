import { useAuth } from "context";
import { Navigate } from "react-router-dom";

function CheckAuth({ children }) {
  const { authState } = useAuth();
  return authState.isLoggedIn ? (
    <Navigate to={"/videos/explore"} replace={true} />
  ) : (
    children
  );
}

export { CheckAuth };

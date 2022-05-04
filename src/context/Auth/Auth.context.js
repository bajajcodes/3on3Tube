import { useContext, useReducer, createContext } from "react";
import { useAuthReducer } from "./Auth.context.reducer";
import { getValue } from "utils";

function getLoginStatus() {
  const value = getValue("token");
  if (value) {
    return true;
  }
  return false;
}

const initialState = { isLoggedIn: getLoginStatus() };
const AuthContext = createContext(null);

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const { reducer } = useAuthReducer();
  const [authState, authDispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };

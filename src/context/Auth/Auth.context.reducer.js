import { setValue, removeValue } from "utils";

function useAuthReducer() {
  function reducer(state, { type, payload }) {
    switch (type) {
      case "LOG_IN":
        setValue("token", payload);
        return { ...state, isLoggedIn: true };
      case "LOG_OUT":
        removeValue("token");
        return { ...state, isLoggedIn: false };
      default:
        throw new Error(`Auth Context no case defined for: ${type}`);
    }
  }

  return { reducer };
}

export { useAuthReducer };

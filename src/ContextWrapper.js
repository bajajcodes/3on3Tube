import { AuthProvider } from "context";

function ContextWrapper({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export { ContextWrapper };
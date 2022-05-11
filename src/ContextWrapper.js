import { AuthProvider, FilterProvider } from "context";

function ContextWrapper({ children }) {
  return (
    <AuthProvider>
      <FilterProvider>{children}</FilterProvider>
    </AuthProvider>
  );
}

export { ContextWrapper };

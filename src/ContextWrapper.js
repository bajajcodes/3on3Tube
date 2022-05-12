import { AuthProvider, FilterProvider, LikesProvider } from "context";

function ContextWrapper({ children }) {
  return (
    <AuthProvider>
      <FilterProvider>
        <LikesProvider>{children}</LikesProvider>
      </FilterProvider>
    </AuthProvider>
  );
}

export { ContextWrapper };

import {
  AuthProvider,
  FilterProvider,
  LikesProvider,
  WatchLaterProvider,
} from "context";

function ContextWrapper({ children }) {
  return (
    <AuthProvider>
      <FilterProvider>
        <LikesProvider>
          <WatchLaterProvider>{children}</WatchLaterProvider>
        </LikesProvider>
      </FilterProvider>
    </AuthProvider>
  );
}

export { ContextWrapper };

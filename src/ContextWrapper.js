import {
  AuthProvider,
  FilterProvider,
  LikesProvider,
  WatchLaterProvider,
  HistoryProvider,
} from "context";

function ContextWrapper({ children }) {
  return (
    <AuthProvider>
      <FilterProvider>
        <LikesProvider>
          <WatchLaterProvider>
            <HistoryProvider>{children}</HistoryProvider>
          </WatchLaterProvider>
        </LikesProvider>
      </FilterProvider>
    </AuthProvider>
  );
}

export { ContextWrapper };

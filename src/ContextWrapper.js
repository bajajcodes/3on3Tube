import {
  AuthProvider,
  FilterProvider,
  LikesProvider,
  WatchLaterProvider,
  HistoryProvider,
  PlaylistsProvider,
} from "context";

function ContextWrapper({ children }) {
  return (
    <AuthProvider>
      <FilterProvider>
        <LikesProvider>
          <WatchLaterProvider>
            <HistoryProvider>
              <PlaylistsProvider>{children}</PlaylistsProvider>
            </HistoryProvider>
          </WatchLaterProvider>
        </LikesProvider>
      </FilterProvider>
    </AuthProvider>
  );
}

export { ContextWrapper };

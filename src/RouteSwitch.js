import { VideoCardIframe } from "components";
import {
  Home,
  Auth,
  Explore,
  LikedVideos,
  Playlists,
  Playlist,
  History,
  WatchLater,
  Videos,
  NotFound,
} from "pages";
import { Routes, Route } from "react-router-dom";
import { CheckAuth } from "CheckAuth";
import { RequiresAuth } from "RequiresAuth";

function RouteSwitch() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <CheckAuth>
            <Auth />
          </CheckAuth>
        }
      />
      <Route
        path="/signup"
        element={
          <CheckAuth>
            <Auth />
          </CheckAuth>
        }
      />
      <Route path="/videos" element={<Videos />}>
        <Route index element={<Explore />} />
        <Route path="explore" element={<Explore />} />
        <Route
          path="liked"
          element={
            <RequiresAuth>
              <LikedVideos />
            </RequiresAuth>
          }
        />
        <Route
          path="playlists"
          element={
            <RequiresAuth>
              <Playlists />
            </RequiresAuth>
          }
        />
        <Route
          path="playlists/:playlistId"
          element={
            <RequiresAuth>
              <Playlist />
            </RequiresAuth>
          }
        />
        <Route
          path="history"
          element={
            <RequiresAuth>
              <History />
            </RequiresAuth>
          }
        />
        <Route
          path="later"
          element={
            <RequiresAuth>
              <WatchLater />
            </RequiresAuth>
          }
        />
        <Route path="watch/:videoId" element={<VideoCardIframe />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export { RouteSwitch };

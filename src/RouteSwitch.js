import { VideoCardIframe } from "components";
import {
  Home,
  Auth,
  Explore,
  LikedVideos,
  Playlists,
  History,
  WatchLater,
  Videos,
} from "pages";
import { Routes, Route } from "react-router-dom";
import { CheckAuth } from "CheckAuth";
import { RequiresAuth } from "RequiresAuth";
import Mockman from "mockman-js";

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
        <Route path="playlists" element={<Playlists />} />
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
      </Route>
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
}

export { RouteSwitch };

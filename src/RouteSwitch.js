import { videoCardFakeInfo } from "data";
import { VideoCard } from "components";
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
import Mockman from "mockman-js";

function RouteSwitch() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/signup" element={<Auth />} />
      <Route path="/videos" element={<Videos />}>
        <Route index element={<Explore />} />
        <Route path="explore" element={<Explore />} />
        <Route path="liked" element={<LikedVideos />} />
        <Route path="playlists" element={<Playlists />} />
        <Route path="history" element={<History />} />
        <Route path="later" element={<WatchLater />} />
        <Route path="watch" element={<VideoCard info={videoCardFakeInfo} />} />
      </Route>
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
}

export { RouteSwitch };

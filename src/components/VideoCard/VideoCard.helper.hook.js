import {
  watchlaterVideoOption,
  likedDislikedVideoOption,
} from "./VideoCard.helpers";
import {
  useWatchLaterData,
  useHistoryData,
  usePlaylistsData,
  useLikedVideosData,
} from "hooks";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "context";

function useVideoCardHelper(options, setOptions, setIsModalRequired) {
  const { toggleWatchLaterVideos } = useWatchLaterData();
  const { deleteFromHistoryVideos } = useHistoryData();
  const { deleteVideoFromPlaylist } = usePlaylistsData();
  const { toggleLikesVideo } = useLikedVideosData();
  const navigate = useNavigate();
  const location = useLocation();
  const { authState } = useAuth();

  function loginRedirect() {
    navigate("/login", { replace: true, state: { from: location.pathname } });
  }

  function toggleWatchLaterOption(info) {
    if (authState.isLoggedIn) {
      let object = null;
      if (options.watchlaterIconType === "watch_later") {
        object = watchlaterVideoOption(true);
      } else {
        object = watchlaterVideoOption(false);
      }
      setOptions((p) => ({ ...p, ...object }));
      toggleWatchLaterVideos(info);
    } else {
      loginRedirect();
    }
  }

  function playlistOptionActionTrue(event) {
    if (authState.isLoggedIn) {
      setIsModalRequired(true);
    } else {
      loginRedirect();
    }
  }

  function playlistOptionActionFalse(event) {
    setIsModalRequired(false);
  }

  function toggleLikeOption(info) {
    if (authState.isLoggedIn) {
      let object = null;
      if (options.likesIconText === "Like") {
        object = likedDislikedVideoOption(true);
      } else {
        object = likedDislikedVideoOption(false);
      }
      setOptions((p) => ({ ...p, ...object }));
      toggleLikesVideo(info);
    } else {    
      loginRedirect();
    }
  }

  function deleteOptionAction(videoId) {
    if (location.pathname.includes("history")) {
      deleteFromHistoryVideos(videoId);
    } else if (location.pathname.includes("playlists")) {
      deleteVideoFromPlaylist(location.pathname.split("/")[3], videoId);
    }
  }

  return {
    toggleWatchLaterOption,
    playlistOptionActionFalse,
    playlistOptionActionTrue,
    toggleLikeOption,
    deleteOptionAction,
  };
}

export { useVideoCardHelper };

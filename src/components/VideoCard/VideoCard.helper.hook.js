import {
  watchlaterVideoOption,
  likedDislikedVideoOption,
} from "./VideoCard.helpers";
import { Alert } from "components";
import {
  useWatchLaterData,
  useHistoryData,
  usePlaylistsData,
  useLikedVideosData,
} from "hooks";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "context";

function useVideoCardHelper(options, setOptions, setIsModalRequired) {
  const { toggleWatchLaterVideos } = useWatchLaterData();
  const { deleteFromHistoryVideos } = useHistoryData();
  const { deleteVideoFromPlaylist } = usePlaylistsData();
  const { toggleLikesVideo } = useLikedVideosData();
  const navigate = useNavigate();
  const location = useLocation();
  const { authState } = useAuth();
  const [alertOptions, setAlertOptions] = useState({
    type: "happy",
    show: false,
    message: "",
  });

  function loginRedirect() {
    navigate("/login", { replace: true, state: { from: location.pathname } });
  }

  function toggleWatchLaterOption(info) {
    if (authState.isLoggedIn) {
      let object = null;
      if (options.watchlaterIconType === "watch_later") {
        object = watchlaterVideoOption(true);
        setAlertOptions((p) => ({
          ...p,
          type: "happy",
          message: `${info.title} is added to watchlater`,
          show: true,
        }));
      } else {
        object = watchlaterVideoOption(false);
        setAlertOptions((p) => ({
          ...p,
          type: "unhappy",
          message: `${info.title} is removed from watchlater`,
          show: true,
        }));
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
        setAlertOptions((p) => ({
          ...p,
          type: "happy",
          message: `${info.title} is added to liked`,
          show: true,
        }));
      } else {
        object = likedDislikedVideoOption(false);
        setAlertOptions((p) => ({
          ...p,
          type: "unhappy",
          message: `${info.title} is removed from liked`,
          show: true,
        }));
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
      setAlertOptions((p) => ({
        ...p,
        type: "unhappy",
        message: `History video deleted`,
        show: true,
      }));
    } else if (location.pathname.includes("playlists")) {
      deleteVideoFromPlaylist(location.pathname.split("/")[3], videoId);
      setAlertOptions((p) => ({
        ...p,
        type: "unhappy",
        message: `Video is removed from playlist`,
        show: true,
      }));
    }
  }

  function toggleShow() {
    setAlertOptions((p) => ({ ...p, show: false }));
  }

  return {
    toggleWatchLaterOption,
    playlistOptionActionFalse,
    playlistOptionActionTrue,
    toggleLikeOption,
    deleteOptionAction,
    alertOptions,
    setAlertOptions,
    toggleShow,
  };
}

export { useVideoCardHelper };

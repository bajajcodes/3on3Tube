import { useWatchLater } from "context";
import { useVideoData } from "hooks";
import { useEffect } from "react";

function useWatchLaterData() {
  const { videos, updateWatchLaterVideos } = useWatchLater();
  const { data, postData, deleteData } = useVideoData();

  function isInWatchLaterVideos(videoId) {
    return videos.some((item) => item.videoId === videoId);
  }

  function toggleWatchLaterVideos(video) {
    if (isInWatchLaterVideos(video.videoId)) {
      deleteData(`watchlater/${video.videoId}`);
    } else {
      postData("watchlater", video);
    }
  }

  useEffect(() => {
    if (data.watchlater) {
      updateWatchLaterVideos(data.watchlater);
    }
  }, [data]);

  return { isInWatchLaterVideos, toggleWatchLaterVideos };
}

export { useWatchLaterData };

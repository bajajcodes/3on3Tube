import { useHistory } from "context";
import { useVideoData } from "hooks";
import { useEffect } from "react";

function useHistoryData() {
  const { videos, updateHistoryVideos } = useHistory();
  const { data, postData, deleteData } = useVideoData();

  function isInHistoryVideos(videoId) {
    return videos.some((item) => item.videoId === videoId);
  }

  async function toggleHistoryVideos(video) {
    if (!isInHistoryVideos(video.videoId)) {
      postData("history", video);
    }
  }

  async function deleteAllHistoryVideos() {
    deleteData(`history/all`);
  }

  async function deleteFromHistoryVideos(videoId) {
    deleteData(`history/${videoId}`);
  }

  useEffect(() => {
    if (data.history) {
      updateHistoryVideos(data.history);
    }
  }, [data]);

  return {
    toggleHistoryVideos,
    deleteAllHistoryVideos,
    deleteFromHistoryVideos,
  };
}

export { useHistoryData };

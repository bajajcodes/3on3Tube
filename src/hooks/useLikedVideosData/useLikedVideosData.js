import { useLikes } from "context";
import { useAxios } from "hooks";
import { getValue } from "utils";
import { useEffect } from "react";

function useLikedVideosData() {
  const { response, error, loading, requestData } = useAxios();
  const {
    likesState: { videos },
    likesDispatch,
  } = useLikes();

  function isLikedVideo(videoId) {
    return videos.some((item) => item.videoId === videoId);
  }

  function toggleLikesVideo(video) {
    if (isLikedVideo(video.videoId)) {
      deleteFromLikedVideos(video.videoId);
    } else {
      postToLikedVideos(video);
    }
  }

  async function postToLikedVideos(video) {
    const token = getValue("token") ?? false;
    if (!token) {
      throw new Error("Token does not exist, login first.");
    }
    requestData({
      url: "/api/user/likes",
      method: "post",
      data: {
        video,
      },
      headers: {
        authorization: token,
      },
    });
  }

  async function deleteFromLikedVideos(videoId) {
    const token = getValue("token") ?? false;
    if (!token) {
      throw new Error("Token does not exist, login first.");
    }
    requestData({
      url: "/api/user/likes/" + videoId,
      method: "delete",
      headers: {
        authorization: token,
      },
    });
  }

  useEffect(() => {
    if (!loading && error === "") {
      const likes = response.likes;
      likesDispatch({ type: "UPDATE", payload: likes });
    } else if (!loading) {
      console.error({ error, response });
    }
  }, [loading]);

  return { loading, isLikedVideo, toggleLikesVideo };
}

export { useLikedVideosData };

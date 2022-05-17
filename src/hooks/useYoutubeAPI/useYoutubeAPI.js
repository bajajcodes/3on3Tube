import { useState } from "react";

function useYoutubeData() {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const baseURL = "https://youtube.googleapis.com/youtube/v3/";
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY.replace(";", "");

  async function requestData(url) {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (error) {
      throw new Error(error);
    }
  }

  async function setVideosData(data) {
    const videos = [];
    const videosPartURL = "videos?part=snippet,contentDetails,statistics&id=";
    const videosApiKeyPartURL = "&maxResults=10&key=" + API_KEY;
    for (let info of data) {
      const { creatorName, avatarPath, videosIds } = info;
      for (let id of videosIds) {
        const videoResponse = await requestData(
          baseURL + videosPartURL + id + videosApiKeyPartURL
        );
        const videoId = videoResponse.items[0].id;
        const thumbnailPath =
          videoResponse.items[0].snippet.thumbnails.medium.url;
        const title = videoResponse.items[0].snippet.title;
        const views = videoResponse.items[0].statistics.viewCount;
        const duration = videoResponse.items[0].contentDetails.duration;
        const description = videoResponse.items[0].snippet.description;
        videos.push({
          thumbnailPath,
          videoId,
          title,
          avatarPath,
          creatorName,
          views,
          duration,
          description,
        });
      }
    }
    setResponse((p) => [].concat(p, videos));
  }

  async function getYoutubeData(channels) {
    const channelPart = `channels?part=snippet,contentDetails,contentOwnerDetails&id=`;
    const data = [];
    try {
      for (let id of channels) {
        const channelURL =
          baseURL + channelPart + id + `&maxResults=10&key=` + API_KEY;
        const channelResponse = await requestData(channelURL);
        const playlistId =
          channelResponse.items[0].contentDetails.relatedPlaylists.uploads;
        const creatorName = channelResponse.items[0].snippet.title;
        const avatarPath =
          channelResponse.items[0].snippet.thumbnails.default.url;
        const playlistURL =
          baseURL +
          "playlistItems?part=snippet&maxResults=10&playlistId=" +
          playlistId +
          "&key=" +
          API_KEY;
        const playlistResponse = await requestData(playlistURL);

        const videosIds = playlistResponse.items.map(
          (item) => item.snippet.resourceId.videoId
        );
        data.push({ creatorName, avatarPath, videosIds });
      }
      setVideosData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { response, error, loading, getYoutubeData };
}

export { useYoutubeData };

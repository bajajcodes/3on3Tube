import { usePlaylists } from "context";
import { useVideoData } from "hooks";
import { useEffect } from "react";

function usePlaylistsData() {
  const { playlists, updatePlaylists } = usePlaylists();
  const { data, getData, postData, deleteData } = useVideoData();

  async function addPlaylistToPlaylists(playlist) {
    postData("playlists", undefined, playlist);
  }

  async function addVideoToPlaylist(_id, video) {
    postData(`playlists/${_id}`, video, undefined);
  }

  async function deleteVideoFromPlaylist(_id, videoId) {
    deleteData(`playlists/${_id}/${videoId}`);
  }

  async function deletePlaylistFromPlaylists(_id) {
    deleteData(`playlists/${_id}`);
  }

  async function getPlaylistInfo(_id) {
    getData(`playlists/${_id}`);
  }

  function isVideoInPlaylist(_id, videoId) {
    return playlists
      .find((playlist) => playlist._id === _id)
      .videos.some((v) => v.videoId === videoId);
  }

  async function togglePlaylistVideo(_id, video) {
    if (isVideoInPlaylist(_id, video.videoId)) {
      deleteVideoFromPlaylist(_id, video.videoId);
    } else {
      addVideoToPlaylist(_id, video);
    }
  }

  useEffect(() => {
    if (data.playlists) {
      updatePlaylists(data.playlists);
    }
    if (data.playlist) {
      const mappedPlaylists = playlists.map((playlist) =>
        playlist._id !== data.playlist._id ? playlist : { ...data.playlist }
      );
      updatePlaylists([...mappedPlaylists]);
    }
  }, [data]);

  return {
    data,
    addPlaylistToPlaylists,
    addVideoToPlaylist,
    deleteVideoFromPlaylist,
    deletePlaylistFromPlaylists,
    getPlaylistInfo,
    togglePlaylistVideo,
    isVideoInPlaylist,
  };
}

export { usePlaylistsData };

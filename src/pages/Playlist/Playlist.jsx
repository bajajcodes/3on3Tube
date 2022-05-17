import { SupremeContainer, XRoof, VideoCardList, Loader } from "components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { usePlaylists } from "context";

function Playlist() {
  const [playlist, setPlaylist] = useState({ videos: [] });
  const [loaderDisplay, setLoaderDisplay] = useState(true);
  const { playlists } = usePlaylists();
  const params = useParams();

  useEffect(() => {
    const playlist = playlists.find((p) => p._id === params.playlistId);
    setPlaylist((p) => ({ ...p, ...playlist }));
    setLoaderDisplay(false);
  }, []);

  useEffect(() => {
    const playlist = playlists.find((p) => p._id === params.playlistId);
    setPlaylist((p) => ({ ...p, ...playlist }));
  }, [playlists]);

  return (
    <>
      {playlist?.title && (
        <SupremeContainer
          headerComponent={
            <XRoof
              info={{
                videosCount: playlist.videos.length,
                iconText: "delete_forever",
                headingText: playlist.title,
                showVideosCount: true,
                _id: playlist._id,
                from: "playlist",
              }}
            />
          }
          bodyComponent={<VideoCardList videos={playlist.videos} />}
        />
      )}
      {!playlist?.title && <Loader display={loaderDisplay} />}
    </>
  );
}

export { Playlist };

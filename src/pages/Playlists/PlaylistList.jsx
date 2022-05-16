import { playlistsInfo } from "data";
import { XRoof } from "components";

export function PlaylistList({ info }) {
  const { watchlaterVideos, likedVideos, playlists } = info;
  return (
    <>
      <XRoof
        info={{
          ...playlistsInfo,
          headingText: "Watch Later",
          showVideosCount: true,
          linkText: "/videos/later",
          videosCount: watchlaterVideos.length,
        }}
        classlist={["borderNormal"]}
      />
      <XRoof
        info={{
          ...playlistsInfo,
          headingText: "Liked",
          showVideosCount: true,
          linkText: "/videos/liked",
          videosCount: likedVideos.length,
        }}
        classlist={["borderNormal"]}
      />
      {playlists.map((playlist, index) => (
        <XRoof
          info={{
            ...playlistsInfo,
            headingText: playlist.title,
            showVideosCount: true,
            _id: playlist._id,
            videosCount: playlist.videos.length,
          }}
          classlist={["borderNormal"]}
          key={index}
        />
      ))}
    </>
  );
}

import { playlistsInfo } from "data";
import { SupremeContainer, XRoof } from "components";
import { usePlaylists, useWatchLater, useLikes } from "context";
import { PlaylistList } from "./PlaylistList";

function Playlists() {
  const { playlists } = usePlaylists();
  const { videos: watchlaterVideos } = useWatchLater();
  const {
    likesState: { videos: likedVideos },
  } = useLikes();

  return (
    <SupremeContainer
      type="playlists"
      headerComponent={<XRoof info={{ ...playlistsInfo, iconText: "" }} />}
      bodyClasses="dgrid dgridSupremeContainerBody"
      bodyComponent={
        <PlaylistList info={{ watchlaterVideos, likedVideos, playlists }} />
      }
    />
  );
}

export { Playlists };

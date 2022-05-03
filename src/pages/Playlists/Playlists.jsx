import { playlistsInfo } from "data";
import { SupremeContainer, XRoof } from "components";

function PlaylistList() {
  return (
    <>
      <XRoof
        info={{ ...playlistsInfo, showVideosCount: true }}
        classlist={["borderNormal"]}
      />
      <XRoof
        info={{ ...playlistsInfo, showVideosCount: true }}
        classlist={["borderNormal"]}
      />
      <XRoof
        info={{ ...playlistsInfo, showVideosCount: true }}
        classlist={["borderNormal"]}
      />
      <XRoof
        info={{ ...playlistsInfo, showVideosCount: true }}
        classlist={["borderNormal"]}
      />
    </>
  );
}

function Playlists() {
  return (
    <SupremeContainer
      type="playlists"
      headerComponent={<XRoof info={{ ...playlistsInfo, iconText: "" }} />}
      bodyClasses="dgrid dgridSupremeContainerBody"
      bodyComponent={<PlaylistList />}
    />
  );
}

export { Playlists };

import styles from "./PlaylistsModal.styles.module.css";
import { usePlaylistsData } from "hooks";
import { usePlaylists } from "context";
import { useEffect, useState } from "react";

function PlaylistsModal({ display = false, displayHandler, video = null }) {
  const [modalDisplay, setModalDisplay] = useState(display);
  const [createNewPlaylist, setCreateNewPlaylist] = useState(false);
  const { addPlaylistToPlaylists, isVideoInPlaylist, togglePlaylistVideo } =
    usePlaylistsData();
  const { playlists } = usePlaylists();

  function postNewPlaylist(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = [...formData.values()][0] ?? "";
    if (title) {
      addPlaylistToPlaylists({
        title,
        description: "A newly created playlist using playlists modal",
      });
      setCreateNewPlaylist(false);
    } else {
      console.error("Empty playlist title.");
    }
  }

  async function postVideoToPlaylist(_id) {
    if (video) {
      togglePlaylistVideo(_id, video);
    }else{
      console.error("Video not available, for add to playlist");
    }
  }

  function isVideoPresentInPlaylist(_id) {
    return isVideoInPlaylist(_id, video.videoId);
  }

  useEffect(() => {
    setModalDisplay(display);
  }, [display]);

  return (
    <section
      onClick={(e) => e.stopPropagation()}
      role="presentation"
      className={`${styles.modal} 
      ${!modalDisplay ? "dnone" : "dblock"}`}
    >
      <section className={`dgrid ${styles.modalContent} gap-10`}>
        <div className={`dflex ${styles.modalHeader}`}>
          <div className={`mr-auto`}>Save to...</div>
          <span
            onClick={(e) => {
              displayHandler(e);
            }}
            className={`material-icons ${styles.close}
          `}
          >
            close
          </span>
        </div>
        <section className="dflex flex-col gap-5">
          {playlists &&
            playlists.map((playlist, index) => (
              <label htmlFor={playlist.title} key={index}>
                <input
                  className={`mr-3 cursor-pointer ${styles.playlistInp}`}
                  type="checkbox"
                  name={playlist.title}
                  id={playlist._id}
                  checked={isVideoPresentInPlaylist(playlist._id)}
                  onChange={() => postVideoToPlaylist(playlist._id)}
                />
                {playlist.title}
              </label>
            ))}
          {!createNewPlaylist && (
            <label
              onClick={() => setCreateNewPlaylist(true)}
              htmlFor="new-playlist"
              className={`${styles.addANewPlaylist}`}
            >
              <input
                type="checkbox"
                name="new-playlist"
                id="new-playlist"
                className={`mr-3`}
              />
              Create a new playlist
            </label>
          )}
          {createNewPlaylist && (
            <form
              onSubmit={(e) => postNewPlaylist(e)}
              className={`dflex flex-col gap-5`}
            >
              <label>
                <input
                  type="text"
                  placeholder="Add new playlist..."
                  className={`p-xs mt-2 w100`}
                  name="playlist"
                />
              </label>
              <button
                className={`text-center cursor-pointer font-wt-600 ${styles.buttonTransparent}`}
              >
                Create
              </button>
            </form>
          )}
        </section>
      </section>
    </section>
  );
}

export { PlaylistsModal };

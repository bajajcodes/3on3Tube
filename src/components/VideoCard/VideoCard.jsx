import styles from "./VideoCard.styles.module.css";
import {
  makeDurationReadable,
  watchlaterVideoOption,
} from "./VideoCard.helpers";
import { useVideoCardHelper } from "./VideoCard.helper.hook";
import { PlaylistsModal } from "components";
import { useWatchLaterData } from "hooks";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function VideoCard({ info }) {
  const {
    thumbnailPath,
    videoId,
    title,
    avatarPath,
    creatorName,
    views,
    duration,
  } = info;
  const [options, setOptions] = useState({
    watchlaterIconText: "Watch Later",
    watchlaterIconType: "watch_later",
  });
  const [isModalRequired, setIsModalRequired] = useState(false);
  const { isInWatchLaterVideos } = useWatchLaterData();
  const {
    toggleWatchLaterOption,
    playlistOptionActionFalse,
    playlistOptionActionTrue,
    deleteOptionAction,
  } = useVideoCardHelper(options, setOptions, setIsModalRequired);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isInWatchLaterVideos(videoId)) {
      const object = watchlaterVideoOption(true);
      setOptions((p) => ({ ...p, ...object }));
    }
  }, []);

  return (
    <div
      className={`${styles.videoCardContainer} ${styles.videoCardContainerMW}`}
    >
      <div className={`${styles.videoCard} gap-10 dflex flex-col borderNormal`}>
        <div
          className={`${styles.videoCardImage}`}
          style={{ backgroundImage: `url(${thumbnailPath})` }}
          onClick={() => {
            navigate(`/videos/watch/${videoId}`);
          }}
        ></div>

        <div className={`${styles.videoCardContent} dflex flex-col gap-10`}>
          <h2 className={`${styles.videoCardTitle}`}>{title}</h2>

          <div className={styles.videoCardCreatorDetails}>
            <img
              src={avatarPath}
              className={`avatar ${styles.videoCardCreatorAvatar}`}
            />
            <h4 className={`${styles.videoCardCreatorName}`}>{creatorName}</h4>
            <div className={`${styles.videoCardViewsWrapper}`}>
              <span
                className={`material-icons-outlined ${styles.videoCardViewsIcon}`}
              >
                visibility
              </span>
              <span
                className={`${styles.videoCardViews}`}
              >{`${views} views`}</span>
            </div>
            <div className={`${styles.videoCardDurationWrapper}`}>
              <span
                className={`material-icons-outlined ${styles.videoCardDurationIcon}`}
              >
                timer
              </span>
              <span className={`${styles.videoCardDuration}`}>
                {makeDurationReadable(duration)}
              </span>
            </div>
          </div>

          <div className={`gap-10 ${styles.videoCardOptions}`}>
            <button
              className={`cursor-pointer  font-wt-600 ${styles.optionButton}`}
              onClick={() => toggleWatchLaterOption(info)}
            >
              <span className={`material-icons-outlined`}>
                {options.watchlaterIconType}
              </span>
              {options.watchlaterIconText}
            </button>
            <button
              className={`cursor-pointer  font-wt-600 ${styles.optionButton}`}
              onClick={(e) => playlistOptionActionTrue(e)}
            >
              <span className={`material-icons-outlined`}>playlist_add</span>
              Save To Playlist
            </button>
            {(location.pathname.includes("history") ||
              location.pathname.includes("playlists")) && (
              <button
                className={`cursor-pointer  font-wt-600 delete ${styles.optionButton}`}
                onClick={() => deleteOptionAction(videoId)}
              >
                <span className={`material-icons-outlined delete`}>delete</span>
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
      <PlaylistsModal
        display={isModalRequired}
        displayHandler={playlistOptionActionFalse}
        video={info}
      />
    </div>
  );
}

export { VideoCard };

import styles from "./VideoCard.styles.module.css";
import {
  optionsInfo,
  makeDurationReadable,
  watchlaterVideoOption,
} from "./VideoCard.helpers";
import { useAuth } from "context";
import { useWatchLaterData } from "hooks";
import { useNavigate } from "react-router-dom";
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
  const { authState } = useAuth();
  const { isInWatchLaterVideos, toggleWatchLaterVideos } = useWatchLaterData();
  const navigate = useNavigate();

  function toggleWatchLaterOption() {
    if (authState.isLoggedIn) {
      let object = null;
      if (options.watchlaterIconType === "watch_later") {
        object = watchlaterVideoOption(true);
      } else {
        object = watchlaterVideoOption(false);
      }
      setOptions((p) => ({ ...p, ...object }));
      toggleWatchLaterVideos(info);
    } else {
      navigate("/login", { replace: true, state: { from: location.pathname } });
    }
  }

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
              onClick={() => toggleWatchLaterOption()}
            >
              <span className={`material-icons-outlined`}>
                {options.watchlaterIconType}
              </span>
              {options.watchlaterIconText}
            </button>
            {optionsInfo.map(({ iconText, iconType }, index) => (
              <button
                key={index}
                className={`cursor-pointer  font-wt-600 ${styles.optionButton}`}
              >
                <span className={`material-icons-outlined`}>{iconType}</span>
                {iconText}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export { VideoCard };

import styles from "./VideoCard.styles.module.css";
import { useNavigate } from "react-router-dom";
import {
  optionsInfo,
  makeDurationReadable,
} from "./VideoCard.helpers";

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
  const navigate = useNavigate();

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

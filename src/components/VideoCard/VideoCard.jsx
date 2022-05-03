import styles from "./VideoCard.styles.module.css";
import { useLocation } from "react-router-dom";
import { ImageVideoCard, IframeVideoCard, optionsInfo, VideoCardDescription } from "./VideoCard.helpers";

function VideoCard({ info }) {
  const location = useLocation();
  const {
    thumbnailPath,
    videoId,
    title,
    avatarPath,
    creatorName,
    views,
    duration,
    description,
  } = info;

  return (
    <div className={`${styles.videoCardContainer}`}>
      <div className={`${styles.videoCard} gap-10 dflex flex-col borderNormal`}>
        {!location.pathname.includes("/videos/watch") &&
          ImageVideoCard(thumbnailPath)}

        {location.pathname.includes("/videos/watch") &&
          IframeVideoCard(videoId)}

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
              <span className={`${styles.videoCardDuration}`}>{duration}</span>
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

          {location.pathname.includes("/videos/watch") &&
            VideoCardDescription(description)}
        </div>
      </div>
    </div>
  );
}

export { VideoCard };
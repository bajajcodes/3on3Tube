import styles from "./VideoCard.styles.module.css";
import { optionsInfo, makeDurationReadable } from "./VideoCard.helpers";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAxios } from "hooks";

function VideoCardIframe() {
  const params = useParams();
  const [info, setInfo] = useState(null);
  const {
    response: videoResponse,
    error: videoError,
    loading: videoLoading,
    requestData,
  } = useAxios();

  useEffect(async () => {
    await requestData({
      method: "get",
      url: `/api/video/${params.videoId}`,
    });
  }, []);

  useEffect(() => {
    if (!videoLoading) {
      if (videoError === "") {
        console.info("--->>>getting video<<<---");
        setInfo(videoResponse.video);
      } else {
        console.error({ videoError });
      }
    }
  }, [videoLoading]);

  return (
    <>
      {info && (
        <div className={`${styles.videoCardContainer} w50break`}>
          <div className={`${styles.videoCard} gap-10 dflex flex-col`}>
            <div className={`${styles.videoCardPlayerContainer}`}>
              <iframe
                frameBorder="0"
                allowFullScreen="1"
                allow="autoplay; picture-in-picture"
                title="YouTube video player"
                width="100%"
                height="100%"
                type="text/html"
                src={`https://www.youtube.com/embed/${info.videoId}`}
                className={`${styles.videoCardPlayer}`}
              ></iframe>
            </div>

            <div className={`${styles.videoCardContent} dflex flex-col gap-10`}>
              <h2 className={`${styles.videoCardTitle}`}>{info.title}</h2>

              <div className={styles.videoCardCreatorDetails}>
                <img
                  src={info.avatarPath}
                  className={`avatar ${styles.videoCardCreatorAvatar}`}
                />
                <h4 className={`${styles.videoCardCreatorName}`}>
                  {info.creatorName}
                </h4>
                <div className={`${styles.videoCardViewsWrapper}`}>
                  <span
                    className={`material-icons-outlined ${styles.videoCardViewsIcon}`}
                  >
                    visibility
                  </span>
                  <span
                    className={`${styles.videoCardViews}`}
                  >{`${info.views} views`}</span>
                </div>
                <div className={`${styles.videoCardDurationWrapper}`}>
                  <span
                    className={`material-icons-outlined ${styles.videoCardDurationIcon}`}
                  >
                    timer
                  </span>
                  <span className={`${styles.videoCardDuration}`}>
                    {makeDurationReadable(info.duration)}
                  </span>
                </div>
              </div>

              <div className={`gap-10 ${styles.videoCardOptions}`}>
                {optionsInfo.map(({ iconText, iconType }, index) => (
                  <button
                    key={index}
                    className={`cursor-pointer  font-wt-600 ${styles.optionButton}`}
                  >
                    <span className={`material-icons-outlined`}>
                      {iconType}
                    </span>
                    {iconText}
                  </button>
                ))}
              </div>

              <span className={`${styles.videoCardDescription}`}>
                {info.description}
              </span>
            </div>
          </div>
        </div>
      )}
      {info === null && <h1>Loading...</h1>}
    </>
  );
}

export { VideoCardIframe };

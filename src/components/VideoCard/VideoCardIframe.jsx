import styles from "./VideoCard.styles.module.css";
import {
  optionsInfo,
  makeDurationReadable,
  likedDislikedVideoOption,
} from "./VideoCard.helpers";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAxios, useLikedVideosData } from "hooks";
import { useAuth } from "context";

function VideoCardIframe() {
  const params = useParams();
  const [info, setInfo] = useState(null);
  const [options, setOptions] = useState({
    likesIconText: "Like",
    likesIconType: "thumb_up",
  });
  const {
    response: videoResponse,
    error: videoError,
    loading: videoLoading,
    requestData,
  } = useAxios();
  const { isLikedVideo, toggleLikesVideo } = useLikedVideosData();
  const { authState } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(async () => {
    await requestData({
      method: "get",
      url: `/api/video/${params.videoId}`,
    });
  }, []);

  useEffect(() => {
    if (!videoLoading) {
      if (videoError === "") {
        setInfo(videoResponse.video);
        if (isLikedVideo(videoResponse.video.videoId)) {
          const object = likedDislikedVideoOption(true);
          setOptions((p) => ({ ...p, ...object }));
        }
      } else {
        console.error({ videoError });
      }
    }
  }, [videoLoading]);

  function toggleLikeOption() {
    if (authState.isLoggedIn) {
      let object = null;
      if (options.likesIconText === "Like") {
        object = likedDislikedVideoOption(true);
      } else {
        object = likedDislikedVideoOption(false);
      }
      setOptions((p) => ({ ...p, ...object }));
      toggleLikesVideo(info);
    } else {
      navigate("/login", { replace: true, state: { from: location.pathname } });
    }
  }

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
                <button
                  className={`cursor-pointer  font-wt-600 ${styles.optionButton}`}
                  onClick={() => toggleLikeOption()}
                >
                  <span className={`material-icons-outlined`}>
                    {options.likesIconType}
                  </span>
                  {options.likesIconText}
                </button>
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

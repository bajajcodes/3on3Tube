import styles from "./XRoof.styles.module.css";
import { useHistoryData } from "hooks";

function XRoof({ info, classlist = [] }) {
  const { headingText, videosCount, showVideosCount, iconText = "" } = info;
  const { deleteAllHistoryVideos } = useHistoryData();

  function xroofOptionAction(iconText) {
    if (iconText === "delete_forever") {
      deleteAllHistoryVideos();
    }
  }

  return (
    <div className={`dgrid ${styles.xroofContainer} ${classlist.join(" ")}`}>
      <div className={`gap-10 dgrid ${styles.xroofContent}`}>
        <h2>{headingText}</h2>
        {showVideosCount && (
          <div>
            <span className="mr-4">{videosCount}</span>
            <span>videos</span>
          </div>
        )}
      </div>
      {iconText !== "" && (
        <span
          className={`material-icons-outlined ml-auto cursor-pointer delete`}
          onClick={() => xroofOptionAction(iconText)}
        >
          {iconText}
        </span>
      )}
    </div>
  );
}

export { XRoof };

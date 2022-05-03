import styles from "./XRoof.styles.module.css";

function XRoof({ info, classlist = [] }) {
  const { headingText, videosCount, showVideosCount, iconText = "" } = info;
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
        <span className={`material-icons-outlined ml-auto cursor-pointer`}>
          {iconText}
        </span>
      )}
    </div>
  );
}

export { XRoof };

import styles from "./XRoof.styles.module.css";
import { Alert } from "components";
import { useHistoryData, usePlaylistsData } from "hooks";
import { usePlaylists } from "context";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function XRoof({ info, classlist = [] }) {
  const { headingText, videosCount, showVideosCount, iconText = "" } = info;
  const [alertOptions, setAlertOptions] = useState({
    type: "happy",
    show: false,
    message: "",
  });
  const { playlists } = usePlaylists();
  const { deleteAllHistoryVideos } = useHistoryData();
  const { deletePlaylistFromPlaylists } = usePlaylistsData();
  const navigate = useNavigate();
  const location = useLocation();

  function xroofOptionAction(iconText) {
    if (iconText === "delete_forever") {
      if (location.pathname.includes("history")) {
        deleteAllHistoryVideos();
        if (videosCount > 0) {
          setAlertOptions((p) => ({
            ...p,
            type: "unhappy",
            show: true,
            message: `All History videos deleted`,
          }));
        } else {
          setAlertOptions((p) => ({
            ...p,
            type: "unhappy",
            show: true,
            message: `History is empty`,
          }));
        }
      } else {
        deletePlaylistFromPlaylists(info._id);
        setAlertOptions((p) => ({
          ...p,
          type: "unhappy",
          show: true,
          message: `${headingText} removed from playlists`,
        }));
      }
    } else if (iconText === "open_in_new") {
      navigate(`${!info._id ? info.linkText : `${info._id}`}`, {
        state: { from: location.pathname },
      });
    }
  }

  function toggleShow() {
    setAlertOptions((p) => ({ ...p, show: false }));
  }

  //*@NOTE: Wired error validation and handling, because I seriously forget what is happening and how is happening. I need to trace these lines of code.

  useEffect(() => {
    if (info?.from === "playlist") {
      if (!playlists.some((playlist) => playlist._id === info._id)) {
        navigate("/videos/playlists");
      }
    }
  }, [playlists]);

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
          className={`material-icons-outlined ml-auto cursor-pointer ${
            iconText === "delete_forever" ? "delete" : "linkTo"
          }`}
          onClick={() => xroofOptionAction(iconText)}
        >
          {iconText}
        </span>
      )}
      <Alert alertOptions={alertOptions} toggleShow={toggleShow} />
    </div>
  );
}

export { XRoof };

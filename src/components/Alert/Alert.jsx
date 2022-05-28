import { useState, useEffect } from "react";

function getInfo(type) {
  return type === "happy"
    ? {
        background: "alert-bg-success",
        iconColor: "alert-color-success",
        iconType: "check_circle",
      }
    : {
        background: "alert-bg-error",
        iconColor: "alert-color-error",
        iconType: "cancel",
      };
}

function Alert({ alertOptions, toggleShow }) {
  const { show = false, message, type = "happy" } = alertOptions;
  const info = getInfo(type);
  const [controller, setController] = useState(false);

  useEffect(() => {
    let timerId = null;
    if (controller) {
      timerId = setTimeout(() => setController(false), 1000);
    }
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [controller]);

  useEffect(() => {
    if (show) {
      setController(true);
      toggleShow();
    }
  }, [show]);

  return (
    <div
      className={`alert align-items-center alertDisplay alert-z-index-1001 ${info.background} ${
        controller ? "dflex" : "dnone"
      }`}
    >
      <span className={`material-icons alert-info-icon mr-9 ${info.iconColor}`}>
        {info.iconType}
      </span>
      <div>
        <div className="alert-message">{message}</div>
      </div>
    </div>
  );
}

export { Alert };

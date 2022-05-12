import { useContext, createContext, useState, useEffect } from "react";
import { useVideoData } from "hooks";

const WatchLaterContext = createContext(null);

function useWatchLater() {
  return useContext(WatchLaterContext);
}

function WatchLaterProvider({ children }) {
  const { data, getData } = useVideoData();
  const [videos, setVideos] = useState([]);
  useEffect(() => getData("watchlater", true), []);
  useEffect(() => {
    if (data.watchlater) {
      setVideos(data.watchlater);
    }
  }, [data]);

  function updateWatchLaterVideos(videos) {
    setVideos(videos);
  }
  return (
    <WatchLaterContext.Provider value={{ videos, updateWatchLaterVideos }}>
      {children}
    </WatchLaterContext.Provider>
  );
}

export { WatchLaterProvider, useWatchLater };

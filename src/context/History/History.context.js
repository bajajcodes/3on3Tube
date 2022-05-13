import { useContext, createContext, useState, useEffect } from "react";
import { useVideoData } from "hooks";

const HistoryContext = createContext(null);

function useHistory() {
  return useContext(HistoryContext);
}

function HistoryProvider({ children }) {
  const { data, getData } = useVideoData();
  const [videos, setVideos] = useState([]);
  useEffect(() => getData("history", true), []);
  useEffect(() => {
    if (data.History) {
      setVideos(data.History);
    }
  }, [data]);

  function updateHistoryVideos(videos) {
    setVideos(videos);
  }
  return (
    <HistoryContext.Provider value={{ videos, updateHistoryVideos }}>
      {children}
    </HistoryContext.Provider>
  );
}

export { HistoryProvider, useHistory };

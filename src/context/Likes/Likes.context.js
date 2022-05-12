import {
  useContext,
  useReducer,
  createContext,
  useState,
  useEffect,
} from "react";
import { useVideoData } from "hooks";
import { reducer } from "./Likes.context.reducer";

const LikesContext = createContext(null);

function useLikes() {
  return useContext(LikesContext);
}

function LikesProvider({ children }) {
  const { data, getData } = useVideoData();
  const [videos, setVideos] = useState([]);
  const [likesState, likesDispatch] = useReducer(reducer, { videos });
  useEffect(() => getData("likes", true), []);
  useEffect(() => {
    if (data.likes) {
      setVideos(data.likes);
    }
  }, [data]);
  return (
    <LikesContext.Provider value={{ likesState, likesDispatch }}>
      {children}
    </LikesContext.Provider>
  );
}

export { LikesProvider, useLikes };

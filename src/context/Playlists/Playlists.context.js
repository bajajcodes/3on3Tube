import { useContext, createContext, useState, useEffect } from "react";
import { useVideoData } from "hooks";

const PlaylistsContext = createContext(null);

function usePlaylists() {
  return useContext(PlaylistsContext);
}

function PlaylistsProvider({ children }) {
  const { data, getData } = useVideoData();
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => getData("playlists", true), []);
  useEffect(() => {
    if (data.playlists) {
      setPlaylists(data.playlists);
    }
  }, [data]);

  function updatePlaylists(playlists) {
    setPlaylists(playlists);
  }
  return (
    <PlaylistsContext.Provider value={{ playlists, updatePlaylists }}>
      {children}
    </PlaylistsContext.Provider>
  );
}

export { PlaylistsProvider, usePlaylists };

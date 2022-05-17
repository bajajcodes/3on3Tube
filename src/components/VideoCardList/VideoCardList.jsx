import { VideoCard } from "../VideoCard/VideoCard";
import { Loader } from "components";
import { useState, useEffect } from "react";

function VideoCardList({ videos, videosLoading }) {
  const [loaderDisplay, setLoaderDisplay] = useState(true);

  useEffect(() => {
    if (!videosLoading) {
      setLoaderDisplay(false);
    }
  }, [videosLoading]);
  return (
    <>
      {videosLoading !== true && (
        <ul className="dgrid gap-10 cardContainer">
          {videos.map((video) => (
            <VideoCard key={video.videoId} info={video} />
          ))}
        </ul>
      )}
      {videosLoading === true && <Loader display={loaderDisplay} />}
      {videosLoading !== true && videos.length === 0 && (
        <h1>No Videos Found</h1>
      )}
    </>
  );
}

export { VideoCardList };

import { VideoCard } from "../VideoCard/VideoCard";

function VideoCardList({ videos, videosLoading }) {
  return (
    <>
      {videosLoading !== true && (
        <ul className="dgrid gap-10 cardContainer">
          {videos.map((video) => (
            <VideoCard key={video.videoId} info={video} />
          ))}
        </ul>
      )}
      {videosLoading === true && videos.length === 0 && <h1>Loading...</h1>}
      {videosLoading !== true && videos.length === 0 && (
        <h1>No Videos Found</h1>
      )}
    </>
  );
}

export { VideoCardList };

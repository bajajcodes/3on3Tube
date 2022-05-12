import { watchLaterInfo } from "data";
import { SupremeContainer, XRoof, VideoCardList } from "components";
import { useWatchLater } from "context";

function WatchLater() {
  const { videos } = useWatchLater();

  return (
    <SupremeContainer
      headerComponent={
        <XRoof info={{ ...watchLaterInfo, videosCount: videos.length }} />
      }
      bodyComponent={<VideoCardList videos={videos} />}
    />
  );
}

export { WatchLater };

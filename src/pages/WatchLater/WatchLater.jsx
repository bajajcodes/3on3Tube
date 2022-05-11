import { videoCardFakeInfo, watchLaterInfo } from "data";
import { SupremeContainer, XRoof, VideoCardList } from "components";

function getFakeVideos() {
  return Array.from({ length: 30 }, (_, i) => ({
    ...videoCardFakeInfo,
    videoId: i,
  }));
}

function WatchLater() {
  const videos = getFakeVideos();

  return (
    <SupremeContainer
      headerComponent={<XRoof info={watchLaterInfo} />}
      bodyComponent={<VideoCardList videos={videos} />}
    />
  );
}

export { WatchLater };

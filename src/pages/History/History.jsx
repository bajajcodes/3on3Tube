import { videoCardFakeInfo, historyInfo } from "data";
import { SupremeContainer, XRoof, VideoCardList } from "components";

function getFakeVideos() {
  return Array.from({ length: 30 }, (_, i) => ({
    ...videoCardFakeInfo,
    videoId: i,
  }));
}

function History() {
  const videos = getFakeVideos();
  return (
    <SupremeContainer
      headerComponent={<XRoof info={historyInfo} />}
      bodyComponent={<VideoCardList videos={videos} />}
    />
  );
}

export { History };

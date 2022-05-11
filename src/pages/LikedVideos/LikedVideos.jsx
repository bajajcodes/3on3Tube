import { videoCardFakeInfo, likedVideosInfo } from "data";
import { SupremeContainer, XRoof, VideoCardList } from "components";

function getFakeVideos() {
  return Array.from({ length: 30 }, (_, i) => ({
    ...videoCardFakeInfo,
    videoId: i,
  }));
}

function LikedVideos() {
  const videos = getFakeVideos();

  return (
    <SupremeContainer
      headerComponent={<XRoof info={likedVideosInfo} />}
      bodyComponent={<VideoCardList videos={videos} />}
    />
  );
}

export { LikedVideos };

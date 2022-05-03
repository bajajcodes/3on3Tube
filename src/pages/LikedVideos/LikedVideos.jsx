import { likedVideosInfo } from "data";
import { SupremeContainer, XRoof, VideoCardList } from "components";

function LikedVideos() {
  return (
    <SupremeContainer
      headerComponent={<XRoof info={likedVideosInfo} />}
      bodyComponent={<VideoCardList />}
    />
  );
}

export { LikedVideos };

import { likedVideosInfo } from "data";
import { SupremeContainer, XRoof, VideoCardList } from "components";
import { useLikes } from "context";

function LikedVideos() {
  const { likesState } = useLikes();

  return (
    <SupremeContainer
      headerComponent={
        <XRoof
          info={{ ...likedVideosInfo, videosCount: likesState.videos.length }}
        />
      }
      bodyComponent={<VideoCardList videos={likesState.videos} />}
    />
  );
}

export { LikedVideos };

import { historyInfo } from "data";
import { SupremeContainer, XRoof, VideoCardList } from "components";
import { useHistory } from "context";

function History() {
  const { videos } = useHistory();

  return (
    <SupremeContainer
      headerComponent={
        <XRoof info={{ ...historyInfo, videosCount: videos.length }} />
      }
      bodyComponent={<VideoCardList videos={videos} />}
    />
  );
}

export { History };

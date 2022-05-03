import { watchLaterInfo } from "data";
import { SupremeContainer, XRoof, VideoCardList } from "components";

function WatchLater() {
  return (
    <SupremeContainer
      headerComponent={<XRoof info={watchLaterInfo} />}
      bodyComponent={<VideoCardList />}
    />
  );
}

export { WatchLater };

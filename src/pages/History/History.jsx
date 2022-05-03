import { historyInfo } from "data";
import { SupremeContainer, XRoof, VideoCardList } from "components";

function History() {
  return (
    <SupremeContainer
      headerComponent={<XRoof info={historyInfo} />}
      bodyComponent={<VideoCardList />}
    />
  );
}

export { History };

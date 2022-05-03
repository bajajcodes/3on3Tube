import { videoCardFakeInfo } from "data";
import { VideoCard } from "../VideoCard/VideoCard";

function VideoCardList() {
  return (
    <ul className="dgrid gap-10 cardContainer">
      {Array.from({ length: 30 }, (_, i) => (
        <VideoCard key={i} info={videoCardFakeInfo} />
      ))}
    </ul>
  );
}

export { VideoCardList };

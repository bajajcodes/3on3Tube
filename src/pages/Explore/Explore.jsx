import { categories } from "data";
import { SupremeContainer, Chips, VideoCardList } from "components";

function Explore() {
  return (
    <SupremeContainer
      type="explore"
      headerComponent={<Chips chips={categories} />}
      bodyComponent={<VideoCardList />}
    />
  );
}

export { Explore };

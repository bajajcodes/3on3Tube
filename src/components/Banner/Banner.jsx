import styles from "./Banner.styles.module.css";
import { bannerPath } from "data";
import { useNavigate } from "react-router-dom";
import {useFilter} from "context";

function Banner() {
  const { filterDispatch } = useFilter();
  const navigate = useNavigate();

  function filterForCategory() {
    filterDispatch({ type: "CATEGORY_FILTER", payload: "All" });
    navigate("/videos/explore");
  }

  return (
    <div
      className={`dflex flex-col ${styles.banner}`}
      style={{ backgroundImage: `url(${bannerPath})` }}
    >
      <section className={`dflex flex-col ${styles.bannerSection}`}>
        <h1 className={styles.bannerHeading}>
          View actionable videos for you transform to 3 on 3.
        </h1>
        <div className={`Link ${styles.bannerLink} cursor-pointer`} onClick={() => filterForCategory()}>
          <span>Explore Videos</span>
          <span className={`material-icons-outlined`}>navigate_next</span>
        </div>
      </section>
    </div>
  );
}

export { Banner };

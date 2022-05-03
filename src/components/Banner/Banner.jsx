import styles from "./Banner.styles.module.css";
import { bannerPath } from "data";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div
      className={`dflex flex-col ${styles.banner}`}
      style={{ backgroundImage: `url(${bannerPath})` }}
    >
      <section className={`dflex flex-col ${styles.bannerSection}`}>
        <h1 className={styles.bannerHeading}>
          View actionable videos for you transform to 3 on 3.
        </h1>
        <Link className={`Link ${styles.bannerLink}`} to="/videos/explore">
          <span>Explore Videos</span>
          <span className={`material-icons-outlined`}>navigate_next</span>
        </Link>
      </section>
    </div>
  );
}

export { Banner };

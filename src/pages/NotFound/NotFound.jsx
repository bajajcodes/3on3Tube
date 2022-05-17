import styles from "./NotFound.styles.module.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className={styles.containerNFP}>
      <h1 className="text-center">Page Not Found</h1>
      <button className={styles.gohome}>
        <Link to="/" className="link">
          Go Home
        </Link>
      </button>
      <h4 className="text-center">
        You land into publicly available deep web, click the button above to
        teleport to surface web.
      </h4>
    </section>
  );
}

export { NotFound };

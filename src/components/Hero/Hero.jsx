import styles from "./Hero.styles.module.css";
import { logoPath, appName } from "data";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className={styles.hero}>
      <Link className="Link" to="/">
        <img
          className={styles.heroImage}
          alt="logo for 3on3 Tube"
          src={logoPath}
        />
        <span className="ml-3">{appName}</span>
      </Link>
    </div>
  );
}

export { Hero };

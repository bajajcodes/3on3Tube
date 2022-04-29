import styles from "./Footer.styles.module.css";
import { Hero } from "../Hero/Hero";

function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerDesc}>
        <Hero />
        <span>
          Get what you need to live a life less ordinary, become 3 on 3 and live
          a healthy life, make money and game the system. 3 on 3 Tube is subject
          to truth risk and persuasive skill.
        </span>
      </div>
      <div className={styles.footerAuthor}>
        <h2>Written ✍🏻 by</h2>
        <h2>Shubham Bajaj</h2>
      </div>
    </footer>
  );
}

export { Footer };

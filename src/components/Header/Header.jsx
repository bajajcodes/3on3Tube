import { v4 as uuid } from "uuid";
import { headerActionItems } from "data";
import styles from "./Header.styles.module.css";
import { Hero } from "../Hero/Hero";
import { SearchBar } from "../SearchBar/SearchBar";
import { ActionItem } from "../ActionItem/ActionItem";

function Header() {
  return (
    <header className={styles.headerWrapper}>
      <div className="dflex">
        <span className={`material-icons mr-5 ${styles.headerHamburger}`}>
          menu
        </span>
        <Hero />
      </div>
      <div style={{ display: "none" }}>
        <SearchBar />
      </div>
      <div className={` ${styles.headerEnd}`}>
        {headerActionItems.map((actionItemInfo) => (
          <ActionItem actionItemInfo={actionItemInfo} key={uuid()} />
        ))}
      </div>
    </header>
  );
}

export { Header };

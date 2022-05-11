import styles from "./Videos.styles.module.css";
import { navActionItems } from "data";
import { ActionItem } from "components";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function Videos() {
  const [toggleNav, setToggleNav] = useState(false);

  function makeNavToggle(e) {
    setToggleNav((p) => !p);
  }

  return (
    <main className={`${styles.videosMain}`}>
      <span
        className={`material-icons-outlined mr-5 ${styles.headerHamburger}`}
        onClick={(e) => makeNavToggle(e)}
      >
        menu
      </span>
      <nav
        className={`p-sm dflex flex-col ${styles.videosNav} ${
          toggleNav
            ? styles.videosNavTranslateXZero
            : styles.videosNavTranslateXMinus
        }`}
      >
        <span
          className={`material-icons-outlined ${styles.navCloseOption}`}
          onClick={(e) => makeNavToggle(e)}
        >
          close
        </span>
        <ul onClick={(e) => makeNavToggle(e)}>
          {navActionItems.map((actionItemInfo, index) => (
            <ActionItem actionItemInfo={actionItemInfo} key={index} />
          ))}
        </ul>
      </nav>
      <Outlet />
    </main>
  );
}

export { Videos };

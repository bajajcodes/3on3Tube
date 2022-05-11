import { headerActionItems, headerLogoutActionItem } from "data";
import styles from "./Header.styles.module.css";
import { Hero } from "../Hero/Hero";
import { SearchBar } from "../SearchBar/SearchBar";
import { ActionItem } from "../ActionItem/ActionItem";
import { useAuth } from "context";
import { useLocation } from "react-router-dom";

function Header() {
  const { authState, authDispatch } = useAuth();
  const location = useLocation();

  function makeUserLogOut() {
    authDispatch({ type: "LOG_OUT" });
  }

  return (
    <header className={styles.headerWrapper}>
      <div className="dflex">
        <Hero />
      </div>
      {location.pathname === "/videos/explore" && (
        <div>
          <SearchBar />
        </div>
      )}
      <div className={`${styles.headerEnd}`}>
        {headerActionItems.map((actionItemInfo, index) => {
          if (actionItemInfo.itemText !== "Login") {
            return <ActionItem actionItemInfo={actionItemInfo} key={index} />;
          } else if (!authState.isLoggedIn) {
            return <ActionItem actionItemInfo={actionItemInfo} key={index} />;
          }
        })}
        {authState.isLoggedIn && (
          <div
            className={`cursor-pointer font-wt-600 dflex align-items-center flex-col ${styles.logoutWrapper}`}
            style={{}}
            onClick={makeUserLogOut}
          >
            <span className={`material-icons-outlined`}>
              {headerLogoutActionItem.itemIconType}
            </span>
            <span className={`ml-auto`}>{headerLogoutActionItem.itemText}</span>
          </div>
        )}
      </div>
    </header>
  );
}

export { Header };

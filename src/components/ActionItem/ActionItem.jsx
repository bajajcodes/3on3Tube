import styles from "./ActionItem.styles.module.css";
import { NavLink } from "react-router-dom";

function ActionItem({ actionItemInfo }) {
  const { itemIconType, itemText, isFlexDirectionColumn, linkTo } =
    actionItemInfo;
  return (
    <NavLink
      to={linkTo}
      className={({ isActive }) =>
        `cursor-pointer font-wt-600 dflex align-items-center ${
          isFlexDirectionColumn ? "flex-col" : ""
        }   ${styles.actionItemWrapper} ${styles.actionItemLink} ${isActive ? "active-link" : ""}`
      }
    >
      <span className={`material-icons-outlined`}>{itemIconType}</span>
      <span className={`ml-auto`}>{itemText}</span>
    </NavLink>
  );
}

export { ActionItem };

import styles from "./ActionItem.styles.module.css";
import { Link } from "react-router-dom";

function ActionItem({ actionItemInfo }) {
  const { itemIconType, itemText, isFlexDirectionColumn, linkTo } =
    actionItemInfo;
  return (
    <Link
      to={linkTo}
      className={`cursor-pointer font-wt-600 dflex align-items-center ${
        isFlexDirectionColumn ? "flex-col" : ""
      }   ${styles.actionItemWrapper} ${styles.actionItemLink}`}
    >
      <span className={`material-icons-outlined`}>{itemIconType}</span>
      <span className={`ml-auto`}>{itemText}</span>
    </Link>
  );
}

export { ActionItem };

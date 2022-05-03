import styles from "./SearchBar.styles.module.css";
import { InputField } from "../InputField/InputField";

function SearchBar() {
  return (
    <div className={`dflex ${styles.searchWrapper} borderNormal`}>
      <InputField />
      <button className={`button cursor-pointer font-wt-600 ${styles.searchButton}`}>
        <span className={`material-icons-outlined`}>search</span>
      </button>
    </div>
  );
}

export { SearchBar };

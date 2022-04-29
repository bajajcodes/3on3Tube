import styles from "./SearchBar.styles.module.css";
import { InputField } from "../InputField/InputField";

function SearchBar() {
  return (
    <div className={`dflex ${styles.searchWrapper}`}>
      <InputField />
      <button className={`button ${styles.searchButton}`}>
        <span className={`material-icons`}>search</span>
      </button>
    </div>
  );
}

export { SearchBar };

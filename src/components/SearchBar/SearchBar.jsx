import styles from "./SearchBar.styles.module.css";
import { InputField } from "../InputField/InputField";
import { useFilter } from "context";

function SearchBar() {
  const { filterDispatch } = useFilter();
  function filterVideosOnSearch(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    for (let value of formData.values()) {
      filterDispatch({ type: "SEARCH_FILTER", payload: value });
    }
  }

  function filterVideosOnFly(event) {
    const value = event.target.value;
    filterDispatch({ type: "SEARCH_FILTER", payload: value });
  }

  return (
    <form
      className={`dflex ${styles.searchWrapper} borderNormal`}
      onSubmit={(e) => filterVideosOnSearch(e)}
      onChange={(e) => filterVideosOnFly(e)}
    >
      <InputField placeholder="Enter title to search videos..."/>
      <button
        className={`button cursor-pointer font-wt-600 ${styles.searchButton}`}
      >
        <span className={`material-icons-outlined`}>search</span>
      </button>
    </form>
  );
}

export { SearchBar };

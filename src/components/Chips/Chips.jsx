import styles from "./Chips.styles.module.css";
import { useFilter } from "context";

function Chips({ chips }) {
  const {
    filterState: { category },
    filterDispatch,
  } = useFilter();
  return (
    <>
      {chips.map(({ chipText, chipPreviewText }, index) => (
        <label
          key={index}
          htmlFor={chipText}
          className={`pt-4 pr-4 pb-4 pl-4 text-center borderNormal ${
            styles.chip
          } ${category === chipText ? styles.activeChip : ""}`}
          onClick={() =>
            filterDispatch({ type: "CATEGORY_FILTER", payload: chipText })
          }
        >
          <input
            type="checkbox"
            name="filter-chip"
            id={chipText}
            value={chipText}
          />
          {chipPreviewText}
        </label>
      ))}
    </>
  );
}

export { Chips };

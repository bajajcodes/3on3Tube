import styles from "./Chips.styles.module.css";

function Chips({ chips }) {
  return (
    <>
      {chips.map((chip, index) => (
        <label
          key={index}
          htmlFor={chip}
          className={`pt-4 pr-4 pb-4 pl-4 text-center borderNormal ${styles.chip}`}
        >
          <input type="checkbox" name="filter-chip" id={chip} value={chip} />
          {chip}
        </label>
      ))}
    </>
  );
}

export { Chips };

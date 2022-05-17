import styles from "./Loader.styles.module.css";

function Loader({ display = false }) {
  return (
    <>
      <div
        className={`${styles.loaderContainer} ${display ? "dblock" : "dnone"}`}
      >
        <div className={styles.loader}></div>
      </div>
    </>
  );
}

export { Loader };

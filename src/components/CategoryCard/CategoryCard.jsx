import styles from "./CategoryCard.styles.module.css";
import { useNavigate } from "react-router-dom";
import { useFilter } from "context";

function CategoryCard({ cardInfo }) {
  const { cardImagePath, cardText, category } = cardInfo;
  const { filterDispatch } = useFilter();
  const navigate = useNavigate();

  async function filterForCategory(category) {
    filterDispatch({ type: "CATEGORY_FILTER", payload: category });
    navigate("/videos/explore");
  }

  return (
    <section
      className={`cursor-pointer ${styles.categoryCard}`}
      onClick={() => filterForCategory(category)}
    >
      <img src={cardImagePath} className={styles.categoryCardImage} />
      <div className={styles.categoryCardTextContainer}>
        <h1>{cardText}</h1>
      </div>
    </section>
  );
}

export { CategoryCard };

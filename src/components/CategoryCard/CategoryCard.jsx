import styles from "./CategoryCard.styles.module.css";
import { Link } from "react-router-dom";

function CategoryCard({ cardInfo }) {
  const { cardImagePath, cardText } = cardInfo;
  return (
    <Link className={styles.categoryCard} to="#">
      <img src={cardImagePath} className={styles.categoryCardImage} />
      <div className={styles.categoryCardTextContainer}>
        <h1>{cardText}</h1>
      </div>
    </Link>
  );
}

export { CategoryCard };

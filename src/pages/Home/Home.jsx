import styles from "./Home.styles.module.css";
import { Banner, CategoryCard } from "components";
import { categoriesCards } from "data";

function Home() {
  return (
    <main className={styles.home}>
      <Banner />
      <ul className="dgrid categoriesCardList">
        {categoriesCards.map((cardInfo, index) => (
          <CategoryCard cardInfo={cardInfo} key={index} />
        ))}
      </ul>
    </main>
  );
}

export { Home };

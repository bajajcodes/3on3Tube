import styles from "./SupremeContainer.styles.module.css";
import { SupremeContainerHeader } from "./SupremeContainerHeader";
import { SupremeContainerBody } from "./SupremeContainerBody";

function SupremeContainer({
  type,
  headerComponent,
  bodyComponent,
  bodyClasses="",
}) {
  return (
    <section className={`p-sm ${styles.supremeContainer}`}>
      <SupremeContainerHeader type={type} Component={headerComponent} className={styles.supremeContainerHeader}/>
      <SupremeContainerBody
        Component={bodyComponent}
        extraPowers={bodyClasses}
      />
    </section>
  );
}

export { SupremeContainer };

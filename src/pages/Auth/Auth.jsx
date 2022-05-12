import styles from "./Auth.styles.module.css";
import { useLocation } from "react-router-dom";
import { loginFormFields, signupFormFields } from "data";
import { InputForm } from "components";

function Auth() {
  const location = useLocation();
  const formFields =
    location.pathname === "/login" ? loginFormFields : signupFormFields;

  return (
    <main className={styles.auth}>
      <nav className={styles.authNav}></nav>
      <InputForm formFields={formFields} className={styles.authContent} />
      <aside className={styles.authAside}></aside>
    </main>
  );
}

export { Auth };

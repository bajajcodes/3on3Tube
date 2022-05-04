import styles from "./Auth.styles.module.css";
import { useLocation, Navigate } from "react-router-dom";
import { loginFormFields, signupFormFields } from "data";
import { InputForm } from "components";
import { useEffect } from "react";
import { useAuth } from "context";

function Auth() {
  const location = useLocation();
  const { authState } = useAuth();
  const formFields =
    location.pathname === "/login" ? loginFormFields : signupFormFields;

  useEffect(() => {
    if (authState.isLoggedIn) {
      const to = location.state?.from ?? "/videos/explore";
      <Navigate to={to} replace={true} />;
    }
  }, [authState]);

  return (
    <main className={styles.auth}>
      <nav className={styles.authNav}></nav>
      <InputForm formFields={formFields} className={styles.authContent} />
      <aside className={styles.authAside}></aside>
    </main>
  );
}

export { Auth };

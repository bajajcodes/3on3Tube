import styles from "./InputForm.styles.module.css";
import { InputField } from "components";
import { Link } from "react-router-dom";
import { useForm } from "./useForm.hook";
import { useEffect } from "react";
import { useAxios } from "hooks";
import { useAuth } from "context";

function InputForm({ formFields }) {
  const {
    headerText,
    fieldMetaInfoLists,
    buttonLists,
    helperText,
    linkText,
    linkTo,
  } = formFields;
  const url = `/api/auth/${linkTo === "/login" ? "signup" : "login"}`;

  const { formState, handleFormSubmit } = useForm();
  const { response, error, loading, requestData } = useAxios();
  const { authDispatch } = useAuth();

  useEffect(async () => {
    if (formState.isValidated && formState.error !== true) {
      await requestData({
        method: "post",
        url,
        data:{...formState.response},
      });
    } else if (formState.isValidated && formState.error === true) {
      console.error(formState.response?.error);
    }
  }, [formState]);

  useEffect(() => {
    if (!loading) {
      if (error !== "") {
        console.error({ response, error });
      } else {
        authDispatch({ type: "LOG_IN", payload: response.encodedToken });
      }
    }
  }, [loading]);

  return (
    <div className={styles.formWrapper}>
      <form
        className={`${styles.form} dflex flex-col p-sm`}
        onSubmit={handleFormSubmit}
      >
        <h2 className="text-center">{headerText}</h2>
        <ul>
          {fieldMetaInfoLists.map((fieldMetaInfo, index) => (
            <InputField fieldMetaInfo={fieldMetaInfo} key={index} />
          ))}
        </ul>
        <ul>
          {buttonLists.map((buttonItem, index) => (
            <button
              className={`button cursor-pointer font-wt-600 ${
                buttonItem.isPrimary
                  ? styles.primaryOption
                  : styles.secondaryOption
              }`}
              key={index}
              style={{ display: "block" }}
            >
              {buttonItem.text}
            </button>
          ))}
        </ul>
        <div className="dflex justify-content-center">
          <span className="text-center">{helperText}</span>
          <span className={`${styles.formText} text-center ml-5`}>
            <Link to={linkTo} className={`Link ${styles.fontSizeInitial}`}>
              {linkText}
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export { InputForm };

import styles from "./InputForm.styles.module.css";
import { v4 as uuid } from "uuid";
import { InputField } from "components";
import { Link } from "react-router-dom";

function InputForm({ formFields }) {
  const { headerText, fieldMetaInfoLists, buttonLists, helperText, linkText,linkTo } =
    formFields;
  return (
    <div className={styles.formWrapper}>
      <form className={`${styles.form} dflex flex-col p-sm`}>
        <h2 className="text-center">{headerText}</h2>
        <ul>
          {fieldMetaInfoLists.map((fieldMetaInfo) => (
            <InputField fieldMetaInfo={fieldMetaInfo} key={uuid()} />
          ))}
        </ul>
        <ul>
          {buttonLists.map((buttonItem) => (
            <button
              className={`button ${
                buttonItem.isPrimary
                  ? styles.primaryOption
                  : styles.secondaryOption
              }`}
              key={uuid()}
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
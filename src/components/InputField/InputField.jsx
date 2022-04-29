import styles from "./InputField.styles.module.css";

function InputField({ fieldMetaInfo }) {
  return (
    <label
      className={styles.inputFieldWrapper}
      style={{ display: fieldMetaInfo?.wrapperDisplayType || "inline-block" }}
    >
      {fieldMetaInfo?.infoText && (
        <span className={styles.inputFieldInfo}>{fieldMetaInfo.infoText}</span>
      )}
      {fieldMetaInfo?.optionIcon && (
        <span className={`${styles.inputFieldOption} material-icons`}>
          {fieldMetaInfo.optionIcon}
        </span>
      )}
      <input
        className={styles.inputField}
        type={fieldMetaInfo?.inputType ? fieldMetaInfo.inputType : "text"}
        placeholder={fieldMetaInfo?.placeholderText || ""}
      />
    </label>
  );
}

export { InputField };

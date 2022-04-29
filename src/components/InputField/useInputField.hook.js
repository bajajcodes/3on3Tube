import { useState, useEffect } from "react";

export function useInputField(fieldMetaInfo) {
  const [fieldState, setFieldState] = useState({
    optionIcon: "",
    inputType: "text"
  });

  function toggleIcon(_, isToggle, optionIcon, toggleOptionIcon) {
    if (isToggle) {
      setFieldState((prev) => ({
        ...prev,
        optionIcon: prev.optionIcon === optionIcon ? toggleOptionIcon : optionIcon,
        inputType: prev.inputType === "text" ? "password" : "text"
      }));
    }
  }

  useEffect(() => {
    if (fieldMetaInfo?.optionIcon && fieldMetaInfo?.inputType) {
      setFieldState((prev) => ({
        ...prev,
        optionIcon: fieldMetaInfo.optionIcon,
        inputType: fieldMetaInfo.inputType
      }));
    }
  }, [fieldMetaInfo]);

  return { fieldState, toggleIcon };
}

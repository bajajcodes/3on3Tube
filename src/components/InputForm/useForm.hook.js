import { guestLoginCredentials } from "data";
import { ValidateEmail, ValidatePassword, ValidateTextInput } from "utils";
import { useState } from "react";

export function useForm() {
  const initialFormState = {
    response: null,
    error: "",
    isValidated: false,
  };

  const [formState, setFormState] = useState(initialFormState);

  let isFormHasError = false;

  function handleError(message) {
    isFormHasError = true;
    setFormState((p) =>
      Object.assign({}, p, {
        error: true,
        response: Object.assign({}, p.response, { error: message }),
        isValidated: true,
      })
    );
  }

  function validateInputs(key, value) {
    let validation;
    if (key.includes("email")) {
      validation = ValidateEmail(value);
    } else if (key.includes("password")) {
      validation = ValidatePassword(value);
    } else {
      validation = ValidateTextInput(key, value);
    }
    if (!validation?.status) {
      handleError(validation?.message);
    }
  }

  function handleFormSubmit(event) {
    //* @NOTE: state reset for forgetting previous  form response data
    setFormState((p) =>
      Object.assign({}, p, { response: {}, error: "", isValidated: false })
    );

    if (isFormHasError) {
      isFormHasError = false;
    }

    event.preventDefault();

    //* @GUEST_LOGIN_HANDLER
    if (event.nativeEvent.submitter.innerText === "Guest Login") {
      setFormState((p) =>
        Object.assign({}, p, {
          error: false,
          isValidated: true,
          response: Object.assign({}, p.response, {
            email: guestLoginCredentials.email,
            password: guestLoginCredentials.password,
          }),
        })
      );
      return;
    }

    const formData = new FormData(event.target);
    for (const [key, value] of formData.entries()) {
      validateInputs(key, value);
      if (isFormHasError) {
        break;
      }
      setFormState((p) =>
        Object.assign({}, p, {
          response: Object.assign({}, p.response, { [key]: value }),
        })
      );
    }
    setFormState((p) => Object.assign({}, p, { isValidated: true }));
  }

  return { formState, handleFormSubmit };
}

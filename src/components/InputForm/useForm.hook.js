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

  function handleError(message) {
    setFormState((p) =>
      Object.assign({}, p, {
        error: true,
        response: Object.assign({}, p.response, { error: message }),
      })
    );
    console.error({ message });
  }

  function validateInputs(key, value) {
    if (key.includes("email")) {
      const { status, message } = ValidateEmail(value);
      if (!status) {
        handleError(message);
      }
    } else if (key.includes("password")) {
      const { status, message } = ValidatePassword(value);
      if (!status) {
        handleError(message);
      }
    } else {
      const { status, message } = ValidateTextInput(key, value);
      if (!status) {
        handleError(message);
      }
    }
  }

  function handleFormSubmit(event) {
    //@NOTE: state reset for forgetting previous  form response data
    setFormState((p) => Object.assign({}, p, { response: {} }));

    event.preventDefault();

    //@GUEST_LOGIN_HANDLER
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
      if (formState.error) {
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

const loginFormFields = {
  headerText: "Login",
  fieldMetaInfoLists: [
    {
      wrapperDisplayType: "grid",
      infoText: "Email",
      optionIcon: "",
      isToggle: false,
      toggleIcon: "",
      inputType: "text",
      placeholderText: "Enter Email",
      name: "email",
    },
    {
      wrapperDisplayType: "grid",
      infoText: "Password",
      optionIcon: "visibility_off",
      isToggle: true,
      toggleIcon: "visibility",
      inputType: "password",
      placeholderText: "Enter Password",
      name: "password",
    },
  ],
  buttonLists: [
    {
      text: "Login",
      isPrimary: true,
    },
    {
      text: "Guest Login",
      isPrimary: false,
    },
  ],
  helperText: "New to 3on3 Community?",
  linkText: "Signup now",
  linkTo: "/signup",
};

const signupFormFields = {
  headerText: "Signup",
  fieldMetaInfoLists: [
    {
      wrapperDisplayType: "grid",
      infoText: "First Name",
      optionIcon: "",
      isToggle: false,
      toggleIcon: "",
      inputType: "text",
      placeholderText: "Enter First Name",
      name: "first name",
    },
    {
      wrapperDisplayType: "grid",
      infoText: "Last Name",
      optionIcon: "",
      isToggle: false,
      toggleIcon: "",
      inputType: "text",
      placeholderText: "Enter Last Name",
      name: "last name",
    },
    {
      wrapperDisplayType: "grid",
      infoText: "Email",
      optionIcon: "",
      isToggle: false,
      toggleIcon: "",
      inputType: "text",
      placeholderText: "Enter Email",
      name: "email",
    },
    {
      wrapperDisplayType: "grid",
      infoText: "Password",
      optionIcon: "visibility_off",
      isToggle: true,
      toggleIcon: "visibility",
      inputType: "password",
      placeholderText: "Enter Password",
      name: "password",
    },
    {
      wrapperDisplayType: "grid",
      infoText: "Confirm Password",
      optionIcon: "visibility_off",
      isToggle: true,
      toggleIcon: "visibility",
      inputType: "password",
      placeholderText: "Enter Confirm Password",
      name: "confirm password",
    },
  ],
  buttonLists: [
    {
      text: "Signup",
      isPrimary: true,
    },
  ],
  helperText: "Already buddy to 3on3 Community?",
  linkText: "Login now",
  linkTo: "/login",
};
export {loginFormFields, signupFormFields};
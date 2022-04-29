const publicURL = process.env.PUBLIC_URL;
const logoPath = `${publicURL}/assets/logo/logo.svg`;
const appName = `3on3 Tube`;
const bannerPath = `${publicURL}/assets/images/3on3Banner.jpg`;

const headerActionItems = [
  {
    itemText: "Home",
    itemIconType: "home",
    isFlexDirectionColumn: true,
    linkTo: "#",
  },
  {
    itemText: "Explore",
    itemIconType: "explore",
    isFlexDirectionColumn: true,
    linkTo: "#",
  },
  {
    itemText: "Login",
    itemIconType: "login",
    isFlexDirectionColumn: true,
    linkTo: "/login",
  },
];

const categoriesCards = [
  {
    cardImagePath: `${publicURL}/assets/images/3on3Intelligence.jpg`,
    cardText: "Intelligence",
  },
  {
    cardImagePath: `${publicURL}/assets/images/3on3SocialSkills.jpg`,
    cardText: "Social Skills",
  },
  {
    cardImagePath: `${publicURL}/assets/images/3on3Strength.jpg`,
    cardText: "Strength",
  },
];

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
      name: "Email",
    },
    {
      wrapperDisplayType: "grid",
      infoText: "Password",
      optionIcon: "visibility",
      isToggle: true,
      toggleIcon: "visibility_off",
      inputType: "password",
      placeholderText: "Enter Password",
      name: "Password",
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
      name: "First Name",
    },
    {
      wrapperDisplayType: "grid",
      infoText: "Last Name",
      optionIcon: "",
      isToggle: false,
      toggleIcon: "",
      inputType: "text",
      placeholderText: "Enter Last Name",
      name: "Last Name",
    },
    {
      wrapperDisplayType: "grid",
      infoText: "Email",
      optionIcon: "",
      isToggle: false,
      toggleIcon: "",
      inputType: "text",
      placeholderText: "Enter Email",
      name: "Email",
    },
    {
      wrapperDisplayType: "grid",
      infoText: "Password",
      optionIcon: "visibility",
      isToggle: true,
      toggleIcon: "visibility_off",
      inputType: "password",
      placeholderText: "Enter Password",
      name: "Password",
    },
    {
      wrapperDisplayType: "grid",
      infoText: "Confirm Password",
      optionIcon: "visibility",
      isToggle: true,
      toggleIcon: "visibility_off",
      inputType: "password",
      placeholderText: "Enter Confirm Password",
      name: "Confirm Password",
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

export {
  logoPath,
  appName,
  headerActionItems,
  bannerPath,
  categoriesCards,
  loginFormFields,
  signupFormFields,
};

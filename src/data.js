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
    linkTo: "#",
  },
];

const categoriesCards = [
  {
    cardImagePath:
    `${publicURL}/assets/images/3on3Intelligence.jpg`,
    cardText: "Intelligence",
  },
  {
    cardImagePath:
    `${publicURL}/assets/images/3on3SocialSkills.jpg`,
    cardText: "Social Skills",
  },
  {
    cardImagePath:
    `${publicURL}/assets/images/3on3Strength.jpg`,
    cardText: "Strength",
  },
];

export { logoPath, appName, headerActionItems, bannerPath, categoriesCards };

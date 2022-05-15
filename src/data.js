const publicURL = process.env.PUBLIC_URL;
const logoPath = `${publicURL}/assets/logo/logo.svg`;
const appName = `3on3 Tube`;
const bannerPath = `${publicURL}/assets/images/3on3Banner.jpg`;

const headerActionItems = [
  {
    itemText: "Home",
    itemIconType: "home",
    isFlexDirectionColumn: true,
    linkTo: "/",
  },
  {
    itemText: "Explore",
    itemIconType: "explore",
    isFlexDirectionColumn: true,
    linkTo: "/videos/explore",
  },
  {
    itemText: "Login",
    itemIconType: "login",
    isFlexDirectionColumn: true,
    linkTo: "/login",
  },
];

const headerLogoutActionItem = {
  itemText: "Logout",
  itemIconType: "logout",
  isFlexDirectionColumn: true,
  linkTo: "/login",
};

const categoriesCards = [
  {
    cardImagePath: `${publicURL}/assets/images/3on3Intelligence.jpg`,
    category: "BowTiedBull",
    cardText: "Intelligence",
  },
  {
    cardImagePath: `${publicURL}/assets/images/3on3SocialSkills.jpg`,
    category: "Armani Talks",
    cardText: "Social Skills",
  },
  {
    cardImagePath: `${publicURL}/assets/images/3on3Strength.jpg`,
    category: "Bodyweight Muscle",
    cardText: "Strength",
  },
];

const navActionItems = [
  {
    itemText: "Home",
    itemIconType: "home",
    isFlexDirectionColumn: false,
    linkTo: "/",
  },
  {
    itemText: "Explore",
    itemIconType: "explore",
    isFlexDirectionColumn: false,
    linkTo: "/videos/explore",
  },
  {
    itemText: "Liked",
    itemIconType: "thumb_up",
    isFlexDirectionColumn: false,
    linkTo: "/videos/liked",
  },
  {
    itemText: "Playlists",
    itemIconType: "video_library",
    isFlexDirectionColumn: false,
    linkTo: "/videos/playlists",
  },
  {
    itemText: "History",
    itemIconType: "history",
    isFlexDirectionColumn: false,
    linkTo: "/videos/history",
  },
  {
    itemText: "Watch Later",
    itemIconType: "watch_later",
    isFlexDirectionColumn: false,
    linkTo: "/videos/later",
  },
];

const guestLoginCredentials = {
  email: "anonxSatya@tube.com",
  password: "anonx",
};

export {
  logoPath,
  appName,
  headerActionItems,
  bannerPath,
  categoriesCards,
  navActionItems,
  guestLoginCredentials,
  headerLogoutActionItem,
};

export {
  videoCardFakeInfo,
  loginFormFields,
  signupFormFields,
  channelsInfo,
  socialSkillsChannel,
  strengthChannel,
  intelligenceChannel,
  categories,
  watchLaterInfo,
  playlistsInfo,
  likedVideosInfo,
  historyInfo,
} from "static";

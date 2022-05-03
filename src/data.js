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
      optionIcon: "visibility_off",
      isToggle: true,
      toggleIcon: "visibility",
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
      optionIcon: "visibility_off",
      isToggle: true,
      toggleIcon: "visibility",
      inputType: "password",
      placeholderText: "Enter Password",
      name: "Password",
    },
    {
      wrapperDisplayType: "grid",
      infoText: "Confirm Password",
      optionIcon: "visibility_off",
      isToggle: true,
      toggleIcon: "visibility",
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

const socialSkillsChannel = [
  {
    _id: "UCom1IdOkCHvzkOjbmck2gfg",
    categoryName: "social skills",
  },
];

const strengthChannel = [
  {
    _id: "UCftagEsyzmVwwKZyaFtNgBA",
    categoryName: "strength",
  },
];

const intelligenceChannel = [
  {
    _id: "UCFwsYHhZbudaV4No59q6mbQ",
    categoryName: "intelligence",
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
    itemText: "Liked Videos",
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

const categories = ["All", "Intelligence", "Social Skills", "Strength"];

const info = {
  headingText: "",
  showVideosCount: true,
  videosCount: 0,
  iconText: "open_in_new",
};

const watchLaterInfo = { ...info, headingText: "Watch later" };

const likedVideosInfo = {
  ...info,
  headingText: "Liked Videos",
};

const playlistsInfo = {
  ...info,
  headingText: "All Playlists",
  showVideosCount: false,
};

const historyInfo = {
  ...info,
  headingText: "History",
};

const videoCardFakeInfo = {
  thumbnailPath:
    "https://pbs.twimg.com/profile_images/1310736373247139840/hentCEA2_400x400.jpg",
  videoId: "M7lc1UVf-VE",
  title: `            Basics Episode 05: Startups VS Stable Jobs - Your Job is Not Secure
  Basics Episode 05: Startups VS Stable Jobs - Your Job is Not Secure
  Basics Episode 05: Startups VS Stable Jobs - Your Job is Not Secure
  Basics Episode 05: Startups VS Stable Jobs - Your Job is Not Secure
  Basics Episode 05: Startups VS Stable Jobs - Your Job is Not Secure`,
  avatarPath:
    "https://pbs.twimg.com/profile_images/1310736373247139840/hentCEA2_400x400.jpg",
  creatorName: "Varun Mayya",
  views: "531",
  duration: "5:31",
  description: `For a distraction free viewing experience, Download the Avalon
  Meta App now: http://bit.ly/30mbRhG
  ----------------------------------------------------------------------------------------------------
  In this episode, we explore how automation is making 'Stable' jobs
  a thing of the past, and why running a startup isn't as risky as
  people make it out to be.
  ----------------------------------------------------------------------------------------------------
  Click here to subscribe to my YouTube channel:
  https://www.youtube.com/channel/UCdEy...
  ----------------------------------------------------------------------------------------------------
  Instagram: https://www.instagram.com/thevarunmayya/`,
};

export {
  logoPath,
  appName,
  headerActionItems,
  bannerPath,
  categoriesCards,
  loginFormFields,
  signupFormFields,
  socialSkillsChannel,
  strengthChannel,
  intelligenceChannel,
  navActionItems,
  categories,
  watchLaterInfo,
  likedVideosInfo,
  playlistsInfo,
  historyInfo,
  videoCardFakeInfo,
};

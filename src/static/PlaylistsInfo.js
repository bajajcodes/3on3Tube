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

export { watchLaterInfo, playlistsInfo, likedVideosInfo, historyInfo };
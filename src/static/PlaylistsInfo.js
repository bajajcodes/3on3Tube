const info = {
  headingText: "",
  showVideosCount: true,
  videosCount: 0,
  iconText: "open_in_new",
};

const watchLaterInfo = { ...info, iconText: "", headingText: "Watch later" };

const likedVideosInfo = {
  ...info,
  iconText: "",
  headingText: "Liked Videos",
};

const playlistsInfo = {
  ...info,
  headingText: "All Playlists",
  showVideosCount: false,
};

const historyInfo = {
  ...info,
  iconText: "delete_forever",
  headingText: "History",
};

export { watchLaterInfo, playlistsInfo, likedVideosInfo, historyInfo };

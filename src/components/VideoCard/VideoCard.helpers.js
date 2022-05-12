export const optionsInfo = [
  {
    iconText: "Save To Playlist",
    iconType: "playlist_add",
  },
  {
    iconText: "Watch Later",
    iconType: "watch_later",
  },
];

export function makeDurationReadable(duration) {
  const readable = [];
  const hours = duration.substring(2, duration.indexOf("H"));
  if (hours !== "PT") {
    readable.push(hours);
  }
  let minutes = duration.substring(
    duration.indexOf("M") - 2,
    duration.indexOf("M")
  );
  if (minutes) {
    minutes = minutes.replace(/[A-Za-z]/, "");
    readable.push(minutes);
  }
  let seconds = duration.substring(
    duration.indexOf("S") - 2,
    duration.indexOf("S")
  );
  if (seconds) {
    seconds = seconds.replace(/[A-Za-z]/, "");
    readable.push(seconds);
  }

  return readable.join(":");
}

export function likedDislikedVideoOption(liked) {
  if (liked) {
    return { likesIconText: "Dislike", likesIconType: "thumb_down" };
  }
  return {
    likesIconText: "Like",
    likesIconType: "thumb_up",
  };
}

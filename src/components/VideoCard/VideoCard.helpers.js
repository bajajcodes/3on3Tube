import styles from "./VideoCard.styles.module.css";

export const optionsInfo = [
  {
    iconText: "Like",
    iconType: "thumb_up"
  },
  {
    iconText: "Save To Playlist",
    iconType: "playlist_add"
  },
  {
    iconText: "Watch Later",
    iconType: "watch_later"
  },
];
export function VideoCardDescription(description) {
  return (
    <span className={`${styles.videoCardDescription}`}>{description}</span>
  );
}
export function ImageVideoCard(thumbnailPath) {
  return (
    <div
      className={`${styles.videoCardImage}`}
      style={{ backgroundImage: `url(${thumbnailPath})` }}
    ></div>
  );
}
export function IframeVideoCard(videoId) {
  return (
    <iframe
      type="text/html"
      src={`https://www.youtube.com/embed/${videoId}`}
      className={`${styles.videoCardPlayer}`}
    ></iframe>
  );
}

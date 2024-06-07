import "./VideoNavItem.scss";

function VideoNavItem({ video, onSelectVideo, selectedVideoId }) {
  const handleSelect = () => {
    onSelectVideo(video.id);
  };

  let videoNavCssClass = "video-nav-item";

  if (video.id === selectedVideoId) {
    videoNavCssClass += " video-nav-item--selected";
  }

  return (
    <li className={videoNavCssClass} onClick={handleSelect}>
      <div className="video-nav-item__content">
        <img
          className="video-nav-item__img"
          src={video.image}
          alt={video.title}
        />
      </div>
      <div className="video-nav-item__description">
        <h3 className="video-nav-item__title">{video.title}</h3>
        <h3 className="video-nav-item__channel">{video.channel}</h3>
      </div>
    </li>
  );
}

export default VideoNavItem;

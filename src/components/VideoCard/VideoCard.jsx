import "./VideoCard.scss";
import Video from "../Video/Video";

function VideoCard({ video, onSelectVideo, selectedVideoId, to }) {
  const handleSelect = () => {
    onSelectVideo(video.id);
  };

  let videoNavCssClass = "video-card";

  if (video.id === selectedVideoId) {
    videoNavCssClass += " video-card--selected";
  }

  return (
    <li className={videoNavCssClass} onClick={handleSelect}>
      <div className="video-card__media-wrp">
        <Video
          className="video-card__video"
          video={video}
          showControls={false}
          to={to}
        />
      </div>

      <div className="video-card__description">
        <h3 className="video-card__title">{video.title}</h3>
        <h3 className="video-card__channel">{video.channel}</h3>
      </div>
    </li>
  );
}

export default VideoCard;

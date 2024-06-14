import "./VideoCard.scss";
import { Link } from "react-router-dom";
import Video from "../Video/Video";

function VideoCard({ video, videoData }) {
  let videoNavCssClass = "video-card";

  if (video.id === videoData) {
    videoNavCssClass += " video-card--selected";
  }

  return (
    <li>
      <Link className={videoNavCssClass} to={`/videos/${video.id}`}>
        <div className="video-card__media-wrp">
          <Video
            className="video-card__video"
            video={video}
            showControls={false}
          />
        </div>

        <div className="video-card__description">
          <h3 className="video-card__title">{video.title}</h3>
          <h3 className="video-card__channel">{video.channel}</h3>
        </div>
      </Link>
    </li>
  );
}

export default VideoCard;

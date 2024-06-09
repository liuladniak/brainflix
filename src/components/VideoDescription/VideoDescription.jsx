import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import "./VideoDescription.scss";

function VideoDescription({ videoData }) {
  const { description, title, channel, timestamp, views, likes } = videoData;

  return (
    <div className="video-desc">
      <h1 className="video-desc__title">{title}</h1>
      <div className="video-desc-wrp">
        <div className="video-desc__channel">
          <span>By {channel}</span>
          <span>{timestamp}</span>
        </div>
        <div className="video-desc__stats">
          <div className="video-desc__views">
            <img src={viewsIcon} alt="views icon" />
            <span>{views}</span>
          </div>
          <div className="video-desc__likes">
            <img src={likesIcon} alt="likes icon" />
            <span>{likes}</span>
          </div>
        </div>
      </div>

      <p>{description}</p>
    </div>
  );
}

export default VideoDescription;

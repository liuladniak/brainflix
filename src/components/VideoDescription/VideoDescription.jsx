import viewsIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import formatDate from "../../utils.js";
import "./VideoDescription.scss";

function VideoDescription({ videoData }) {
  const { description, title, channel, timestamp, views, likes } = videoData;

  return (
    <article className="video-desc">
      <h1 className="video-desc__title">{title}</h1>
      <div className="video-desc-wrp">
        <div className="video-desc__channel">
          <span className="video-desc__channel-name">By {channel}</span>
          <span className="video-desc__channel-date">
            {formatDate(timestamp)}
          </span>
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

      <p className="video-desc__content">{description}</p>
    </article>
  );
}

export default VideoDescription;

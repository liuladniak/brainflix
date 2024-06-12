import { Link } from "react-router-dom";
import "./Video.scss";

function Video({ video, showControls, className = "", to }) {
  const { image } = video;

  return (
    <Link to={to}>
      <video
        className={`video ${className}`}
        poster={image}
        controls={showControls}
      >
        <source src="dummy-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Link>
  );
}

export default Video;

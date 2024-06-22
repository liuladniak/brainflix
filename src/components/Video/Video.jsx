import "./Video.scss";
import { useEffect } from "react";
import { API_URL } from "../../utils/api";

function Video({ video, image, showControls, className = "" }) {
  useEffect(() => {
    const videoElement = document.getElementById("video-player");
    if (videoElement) {
      videoElement.load();
    }
  }, [video]);

  return (
    <video
      id="video-player"
      className={`video ${className}`}
      poster={`${API_URL}${image}`}
      controls={showControls}
    >
      <source src={`${API_URL}${video}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default Video;

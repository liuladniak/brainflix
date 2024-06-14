import "./Video.scss";

function Video({ video, showControls, className = "" }) {
  const { image } = video;

  return (
    <video
      className={`video ${className}`}
      poster={image}
      controls={showControls}
    >
      <source src="dummy-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default Video;

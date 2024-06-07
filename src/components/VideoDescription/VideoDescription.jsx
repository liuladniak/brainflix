function VideoDescription({ videoData }) {
  const { description, name } = videoData;

  return (
    <div className="video-description">
      <h1>{name}</h1>
      <h3>{description}</h3>
    </div>
  );
}

export default VideoDescription;

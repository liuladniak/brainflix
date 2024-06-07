function VideoDescription({ videoData }) {
  const { description, name } = videoData;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{description}</h3>
    </div>
  );
}

export default VideoDescription;

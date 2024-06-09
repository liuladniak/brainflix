import "./Video.scss";

function Video({ videoData }) {
  const { image } = videoData;

  return (
    <section className="video-section">
      <video className="video" controls poster={image}>
        <source src="dummy-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default Video;

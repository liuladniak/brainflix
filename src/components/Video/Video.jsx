function Video({ videoData }) {
  const { image, title } = videoData;

  return (
    <section>
      <img className="video__img" src={image} alt={title} />
    </section>
  );
}

export default Video;

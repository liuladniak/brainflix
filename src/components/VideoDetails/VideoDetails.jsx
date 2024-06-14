import VideoComments from "../VideoComments/VideoComments";
import VideoDescription from "../VideoDescription/VideoDescription";
import "./VideoDetails.scss";

function VideoDetails({ selectedVideo }) {
  return (
    <section className="video-details">
      <VideoDescription selectedVideo={selectedVideo} />
      <VideoComments selectedVideo={selectedVideo} />
    </section>
  );
}

export default VideoDetails;

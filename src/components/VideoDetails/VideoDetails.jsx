import VideoComments from "../VideoComments/VideoComments";
import VideoDescription from "../VideoDescription/VideoDescription";
import "./VideoDetails.scss";

function VideoDetails({ videoData }) {
  return (
    <section className="video-details">
      <VideoDescription videoData={videoData} />
      <VideoComments videoData={videoData} />
    </section>
  );
}

export default VideoDetails;

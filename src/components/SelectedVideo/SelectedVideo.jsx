import Video from "../Video/Video";
import "./SelectedVideo.scss";

function SelectedVideo({ videoData }) {
  console.log("SelectedVideo:", videoData);
  return (
    <section className="video-section">
      <Video
        video={videoData}
        showControls={true}
        customControls={true}
        className="video--main"
      />
    </section>
  );
}

export default SelectedVideo;

import Video from "../Video/Video";
import "./SelectedVideo.scss";

function SelectedVideo({ selectedVideo }) {
  return (
    <section className="video-section">
      <Video
        video={selectedVideo}
        showControls={true}
        customControls={true}
        className="video--main"
      />
    </section>
  );
}

export default SelectedVideo;

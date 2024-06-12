import VideoCard from "../VideoCard/VideoCard";
import "./VideoNav.scss";

function VideoNav({ onSelectVideo, videosData, selectedVideoId }) {
  return (
    <nav className="video-nav">
      <h2 className="video-nav__title">Next video</h2>
      <ul className="video-nav__list">
        {videosData.map((video) => {
          return (
            <VideoCard
              key={video.id}
              video={video}
              onSelectVideo={onSelectVideo}
              selectedVideoId={selectedVideoId}
              to={`/video.id`}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default VideoNav;

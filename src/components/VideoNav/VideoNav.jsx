import VideoNavItem from "../VideoNavItem/VideoNavItem";
import "./VideoNav.scss";

function VideoNav({ onSelectVideo, videosData, selectedVideoId }) {
  return (
    <nav className="video-nav">
      <ul className="video-nav-list">
        {videosData.map((video) => {
          return (
            <VideoNavItem
              key={video.id}
              video={video}
              onSelectVideo={onSelectVideo}
              selectedVideoId={selectedVideoId}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default VideoNav;

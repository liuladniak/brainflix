import VideoCard from "../VideoCard/VideoCard";

import "./VideoNav.scss";

function VideoNav({ videosData, videoData }) {
  return (
    <nav className="video-nav">
      <h2 className="video-nav__title">Next video</h2>
      <ul className="video-nav__list">
        {videosData.map((video) => {
          return (
            <VideoCard key={video.id} video={video} videoData={videoData} />
          );
        })}
      </ul>
    </nav>
  );
}

export default VideoNav;

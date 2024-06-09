import { useState } from "react";
import videoDetailsData from "./data/video-details.json";
import "./App.scss";

import Header from "./components/Header/Header";
import VideoNav from "./components/VideoNav/VideoNav";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import Video from "./components/Video/Video";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);
  const [nextVideos, setNextVideos] = useState(videoDetailsData.slice(1));
  const selectVideo = (videoId) => {
    const videoToSelect = videoDetailsData.find((video) => {
      return video.id === videoId;
    });
    setSelectedVideo(videoToSelect);
    setNextVideos(nextVideos.filter((v) => v.id !== videoId));
  };

  return (
    <div className="app">
      <Header />
      <Video videoData={selectedVideo} />
      <VideoDetails videoData={selectedVideo} />
      <VideoNav
        videosData={nextVideos}
        onSelectVideo={selectVideo}
        selectedVideoId={selectedVideo.id}
      />
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import videoDetailsData from "./data/video-details.json";
import "./App.scss";

import Header from "./components/Header/Header";
import VideoNav from "./components/VideoNav/VideoNav";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import Video from "./components/Video/Video";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);

  const selectVideo = (videoId) => {
    const videoToSelect = videoDetailsData.find((video) => {
      return video.id === videoId;
    });
    setSelectedVideo(videoToSelect);
  };

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Video videoData={selectedVideo} />
        <VideoDetails videoData={selectedVideo} />
        <VideoNav
          videosData={videoDetailsData}
          onSelectVideo={selectVideo}
          selectedVideoId={selectedVideo.id}
        />
      </main>
    </div>
  );
}

export default App;

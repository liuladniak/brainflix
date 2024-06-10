import { useState } from "react";
import videoDetailsData from "./data/video-details.json";
import "./App.scss";
import "./styles/partials/_globals.scss";
import Header from "./components/Header/Header";
import VideoNav from "./components/VideoNav/VideoNav";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import SelectedVideo from "./components/SelectedVideo/SelectedVideo";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetailsData[0]);
  const [nextVideos, setNextVideos] = useState(videoDetailsData.slice(1));

  const selectVideo = (videoId) => {
    const videoToSelect = videoDetailsData.find(
      (video) => video.id === videoId
    );

    if (videoToSelect.id !== selectedVideo.id) {
      const updatedNextVideos = nextVideos
        .filter((v) => v.id !== videoId)
        .concat(selectedVideo);

      setSelectedVideo(videoToSelect);
      setNextVideos(updatedNextVideos);
    }
  };

  return (
    <div className="app">
      <Header />
      <SelectedVideo videoData={selectedVideo} />
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

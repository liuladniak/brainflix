import axios from "axios";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { API_KEY, API_URL } from "../../utils/api";
import videoDetailsData from "../../data/video-details.json";
import Header from "../../components/Header/Header";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoNav from "../../components/VideoNav/VideoNav";
import "./MainPage.scss";

function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState(null);
  const [error, setIsError] = useState(false);
  // const { videoId } = useParams();
  // console.log(videoId);

  const getVideos = async () => {
    try {
      const getVideoResponse = await axios.get(
        `${API_URL}videos/?api_key=${API_KEY}`
      );
      console.log(getVideoResponse);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getVideos();
  }, []);
  // ********************************
  // Prev solution:
  // ********************************

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
  // ********************************

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

export default MainPage;

import axios from "axios";
import "./HomePage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../utils/api";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoNav from "../../components/VideoNav/VideoNav";
import Loader from "../../components/Loader/Loader";

function HomePage() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { videoId } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get(`${API_URL}/videos`);
        setVideos(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message, err);
      }
    };
    getVideos();
  }, []);

  useEffect(() => {
    const getVideoDetails = async (id) => {
      try {
        const response = await axios.get(`${API_URL}/videos/${id}`);
        setSelectedVideo(response.data);
      } catch (err) {
        console.error(err.message, err);
      }
    };
    if (!isLoading) {
      if (videoId) {
        getVideoDetails(videoId);
      } else {
        getVideoDetails(videos[0]?.id);
      }
    }
  }, [videos, videoId, isLoading]);

  if (!selectedVideo || videos.length === 0) {
    return <Loader />;
  }

  return (
    <main className="app">
      <SelectedVideo selectedVideo={selectedVideo} />
      <VideoDetails selectedVideo={selectedVideo} />
      <VideoNav
        videosData={videos.filter((video) => video.id !== selectedVideo.id)}
      />
    </main>
  );
}

export default HomePage;

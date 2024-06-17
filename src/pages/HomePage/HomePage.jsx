import axios from "axios";
import "./HomePage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY, API_URL } from "../../utils/api";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoNav from "../../components/VideoNav/VideoNav";

function HomePage() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { videoId } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get(`${API_URL}videos?api_key=${API_KEY}`);
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
        const response = await axios.get(
          `${API_URL}videos/${id}?api_key=${API_KEY}`
        );
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
    return <h2>Loading videos...</h2>;
  }

  return (
    <main className="app">
      <SelectedVideo selectedVideo={selectedVideo} />
      <VideoDetails selectedVideo={selectedVideo} />
      <VideoNav
        videosData={videos.filter((video) => video.id !== selectedVideo.id)}
        selectedVideo={selectedVideo}
      />
    </main>
  );
}

export default HomePage;

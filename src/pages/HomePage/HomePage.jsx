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
  const [nextVideos, setNextVideos] = useState([]);

  const { videoId } = useParams();

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get(`${API_URL}videos?api_key=${API_KEY}`);
        setVideos(response.data);
      } catch (err) {
        console.log(err.message, err);
        throw new Error(err.message);
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

    if (videoId) {
      getVideoDetails(videoId);
    } else {
      getVideoDetails(videos[0]?.id);
    }
  }, [videos, videoId]);

  useEffect(() => {
    if (selectedVideo) {
      setNextVideos(videos.filter((video) => video.id !== selectedVideo.id));
    }
  }, [selectedVideo, videos]);

  if (!selectedVideo || videos.length === 0) {
    return <div>Loading...</div>;
  }

  ////////////////////////////////////////////////////////////////

  return (
    <div className="app">
      <SelectedVideo selectedVideo={selectedVideo} />
      <VideoDetails selectedVideo={selectedVideo} />
      <VideoNav videosData={nextVideos} selectedVideo={selectedVideo} />
    </div>
  );
}

export default HomePage;

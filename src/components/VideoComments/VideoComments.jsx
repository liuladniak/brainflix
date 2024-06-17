import axios from "axios";
import { API_KEY, API_URL } from "../../utils/api";
import { useEffect, useState } from "react";
import CommentsForm from "../CommentsForm/CommentsForm";
import CommentsList from "../CommentsList/CommentsList";
import "./VideoComments.scss";

function VideoComments({ selectedVideo }) {
  const [comments, setComments] = useState(selectedVideo.comments);
  const commentsNr = selectedVideo.comments.length;

  useEffect(() => {
    setComments(selectedVideo.comments);
  }, [selectedVideo]);

  const handleCommentPosted = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(
        `${API_URL}videos/${selectedVideo.id}/comments/${commentId}?api_key=${API_KEY}`
      );
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentId)
      );
    } catch (err) {
      console.error("Failed to delete comment:", err);
    }
  };

  return (
    <article className="comments">
      <h3 className="comments__heading">{commentsNr} comments</h3>
      <div className="comments-wrp">
        <CommentsForm
          selectedVideo={selectedVideo}
          onCommentPosted={handleCommentPosted}
        />
        <CommentsList
          comments={comments}
          onDeleteComment={handleDeleteComment}
        />
      </div>
    </article>
  );
}

export default VideoComments;

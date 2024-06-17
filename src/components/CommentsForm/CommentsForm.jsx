import axios from "axios";
import { useState } from "react";
import { API_KEY, API_URL } from "../../utils/api";
import "./CommentsForm.scss";
import commentIcon from "../../assets/icons/add_comment.svg";
import Button from "../Button/Button";
import avatarImage from "../../assets/images/Mohan-muruge.jpg";
import Avatar from "../Avatar/Avatar";

function CommentsForm({ selectedVideo, onCommentPosted }) {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_URL}videos/${selectedVideo.id}/comments?api_key=${API_KEY}`,
        { name: "User", comment: commentText }
      );
      onCommentPosted(response.data);
      setCommentText("");
    } catch (err) {
      console.error("Failed to post comment:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} action="" method="post" className="form">
      <div className="form-wrp">
        <label className="form__label form__label--comments" htmlFor="comment">
          Join the Conversation
        </label>
        <div className="form__comment">
          <Avatar avatarUrl={avatarImage} />
          <div className="form__content">
            <textarea
              className="form__field form__field--comments"
              type="text"
              name="comment"
              id="comment"
              placeholder="Add a new comment"
              required
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
            <Button type="submit" iconUrl={commentIcon}>
              Comment
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CommentsForm;

import "./CommentsForm.scss";
import commentIcon from "../../assets/icons/add_comment.svg";
import Button from "../Button/Button";
import avatarImage from "../../assets/images/Mohan-muruge.jpg";
import Avatar from "../Avatar/Avatar";
import { useState } from "react";

function CommentsForm() {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCommentText("");
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
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a new comment"
              required
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

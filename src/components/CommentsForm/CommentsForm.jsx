import "./CommentsForm.scss";
import commentIcon from "../../assets/icons/add_comment.svg";
import Button from "../Button/Button";
import avatarImage from "../../assets/images/Mohan-muruge.jpg";
import Avatar from "../Avatar/Avatar";

function CommentsForm() {
  return (
    <form action="" method="post" className="form">
      <div className="form-wrp">
        <label className="form__label" htmlFor="comment">
          Join the Conversation
        </label>
        <div className="form__comment">
          <Avatar avatarUrl={avatarImage} />

          <textarea
            className="form__field"
            type="text"
            name="comment"
            id="comment"
            placeholder="Add a new comment"
            required
          ></textarea>
        </div>
      </div>

      <Button type="submit" iconUrl={commentIcon}>
        Comment
      </Button>
    </form>
  );
}

export default CommentsForm;

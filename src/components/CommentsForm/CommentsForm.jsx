import "./CommentsForm.scss";
import commentIcon from "../../assets/icons/add_comment.svg";
import Button from "../Button/Button";
import avatarIcon from "../../assets/images/Mohan-muruge.jpg";
import Avatar from "../Avatar/Avatar";

function CommentsForm() {
  return (
    <form action="" method="post" className="form">
      <div className="form__user-wrp">
        <label className="form__label" htmlFor="comment">
          Join the Conversation
        </label>
        <div className="form__user">
          <Avatar avatarUrl={avatarIcon} />

          <textarea
            className="form__field form__field--comment"
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

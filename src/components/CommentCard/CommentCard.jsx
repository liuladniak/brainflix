import "./CommentCard.scss";
import formatDate from "../../utils.js";

function CommentCard({ comment }) {
  console.log("COMMENTS:", comment);
  return (
    <div className="comment__card">
      <div className="comment__avatar"></div>
      <div className="comment-wrp">
        <div className="comment__heading">
          <h4 className="comment__heading-name">{comment.name}</h4>
          <span className="comment__heading-date">
            {formatDate(comment.timestamp)}
          </span>
        </div>
        <p className="comment__content">{comment.comment}</p>
      </div>
    </div>
  );
}

export default CommentCard;

import "./CommentCard.scss";
import formatDate from "../../utils/utils.js";
import Avatar from "../Avatar/Avatar.jsx";

function CommentCard({ comment }) {
  return (
    <li className="comment__card">
      {comment.image ? (
        <Avatar avatarUrl={comment.image} />
      ) : (
        <div className="comment__avatar avatar__img"></div>
      )}

      <div className="comment-wrp">
        <div className="comment__heading">
          <h4 className="comment__heading-name">{comment.name}</h4>
          <span className="comment__heading-date">
            {formatDate(comment.timestamp)}
          </span>
        </div>
        <p className="comment__content">{comment.comment}</p>
      </div>
    </li>
  );
}

export default CommentCard;

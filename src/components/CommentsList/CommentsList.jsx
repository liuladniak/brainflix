import CommentCard from "../CommentCard/CommentCard";
import "./CommentsList.scss";

function CommentsList({ comments, onDeleteComment }) {
  return (
    <ul className="comments--posted">
      {comments.map((comment, i) => {
        return (
          <CommentCard comment={comment} key={i} onDelete={onDeleteComment} />
        );
      })}
    </ul>
  );
}

export default CommentsList;

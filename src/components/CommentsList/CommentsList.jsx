import CommentCard from "../CommentCard/CommentCard";
import "./CommentsList.scss";

function CommentsList({ comments }) {
  return (
    <ul className="comments--posted">
      {comments.map((comment, i) => {
        return <CommentCard comment={comment} key={i} />;
      })}
    </ul>
  );
}

export default CommentsList;

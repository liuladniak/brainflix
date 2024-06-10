import CommentCard from "../CommentCard/CommentCard";
import "./CommentsList.scss";

function CommentsList({ videoData }) {
  const commentsList = videoData.comments;

  return (
    <ul className="comments--posted">
      {commentsList.map((comment, i) => {
        return <CommentCard comment={commentsList[i]} key={i} />;
      })}
    </ul>
  );
}

export default CommentsList;

import CommentCard from "../CommentCard/CommentCard";
import "./CommentsList.scss";

function CommentsList({ videoData }) {
  const commentsList = videoData.comments;

  console.log(commentsList);

  return (
    <div className="comments--posted">
      {commentsList.map((comment, i) => {
        return <CommentCard comment={commentsList[i]} key={i} />;
      })}
    </div>
  );
}

export default CommentsList;

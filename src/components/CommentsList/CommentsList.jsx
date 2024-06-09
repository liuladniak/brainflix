import CommentCard from "../CommentCard/CommentCard";
import "./CommentsList.scss";

function CommentsList() {
  return (
    <div className="comments--posted">
      <CommentCard />
    </div>
  );
}

export default CommentsList;

import CommentsForm from "../CommentsForm/CommentsForm";
import CommentsList from "../CommentsList/CommentsList";

function VideoComments() {
  return (
    <div>
      <h2 className="comments__heading">Join the Conversation</h2>
      <CommentsForm />
      <CommentsList />
    </div>
  );
}

export default VideoComments;

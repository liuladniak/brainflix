import CommentsForm from "../CommentsForm/CommentsForm";
import CommentsList from "../CommentsList/CommentsList";
import "./VideoComments.scss";

function VideoComments({ selectedVideo }) {
  const commentsNr = selectedVideo.comments.length;

  return (
    <article className="comments">
      <h3 className="comments__heading">{commentsNr} comments</h3>
      <div className="comments-wrp">
        <CommentsForm />
        <CommentsList videoData={selectedVideo} />
      </div>
    </article>
  );
}

export default VideoComments;

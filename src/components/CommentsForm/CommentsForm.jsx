function CommentsForm() {
  return (
    <form action="" method="post" className="form">
      <div className="form__user-wrp">
        <label
          id="name-label"
          className="form__label form__label--name"
          htmlFor="name"
        >
          Name
        </label>
        <div className="form__user">
          <img
            className="form__user-img"
            src="./assets/images/Mohan-muruge.jpg"
            alt="user image"
          />
          <input
            className="form__field"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
      </div>
      <div className="form__content">
        <label className="form__label" htmlFor="comment">
          Comment
        </label>
        <textarea
          className="form__field form__field--comment"
          type="text"
          name="comment"
          id="comment"
          placeholder="Add a new comment"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn-cta btn-cta--bio">
        Comment
      </button>
    </form>
  );
}

export default CommentsForm;

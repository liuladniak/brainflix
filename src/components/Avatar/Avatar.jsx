import "./Avatar.scss";

function Avatar({ avatarUrl }) {
  return (
    <div className="avatar">
      <a href="/">
        <img className="avatar__img" src={avatarUrl} alt="User avatar" />
      </a>
    </div>
  );
}

export default Avatar;

import "./Avatar.scss";

function Avatar({ avatarUrl, className = "" }) {
  return (
    <div className={`avatar ${className}`}>
      <img className="avatar__img" src={avatarUrl} alt="User avatar" />
    </div>
  );
}

export default Avatar;

import "./Avatar.scss";

function Avatar({ avatarUrl }) {
  return (
    <>
      <img className="avatar" src={avatarUrl} alt="User avatar" />
    </>
  );
}

export default Avatar;

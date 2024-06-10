import { Link } from "react-router-dom";
import "./Avatar.scss";

function Avatar({ avatarUrl, className = "" }) {
  return (
    <div className={`avatar ${className}`}>
      <Link to="/">
        <img className="avatar__img" src={avatarUrl} alt="User avatar" />
      </Link>
    </div>
  );
}

export default Avatar;

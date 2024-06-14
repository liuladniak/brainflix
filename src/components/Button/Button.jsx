import { Link } from "react-router-dom";
import "./Button.scss";

function Button({ children, iconUrl, to, className = "" }) {
  const content = (
    <>
      <img src={iconUrl} alt="Upload button icon" />
      <span>{children}</span>
    </>
  );
  return to ? (
    <Link to={to} className={`btn ${className}`}>
      {content}
    </Link>
  ) : (
    <button className={`btn ${className}`}>{content}</button>
  );
}

export default Button;

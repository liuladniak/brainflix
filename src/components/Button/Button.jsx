import { Link } from "react-router-dom";
import "./Button.scss";

function Button({ children, iconUrl, to, className = "", onClick }) {
  const content = (
    <>
      {iconUrl && <img src={iconUrl} alt="Button icon" />}
      <span>{children}</span>
    </>
  );
  return to ? (
    <Link to={to} className={`btn ${className}`}>
      {content}
    </Link>
  ) : (
    <button className={`btn ${className}`} onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;

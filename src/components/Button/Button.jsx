import { Link } from "react-router-dom";
import "./Button.scss";

function Button({ children, iconUrl, to }) {
  const content = (
    <>
      <img src={iconUrl} alt="Upload button icon" />
      <span>{children}</span>
    </>
  );
  return to ? (
    <Link to={to} className="btn">
      {content}
    </Link>
  ) : (
    <button className="btn">{content}</button>
  );
}

export default Button;

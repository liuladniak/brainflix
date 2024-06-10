import "./Button.scss";

function Button({ children, iconUrl }) {
  return (
    <button className="btn">
      <img src={iconUrl} alt="Upload button icon" />
      <span>{children}</span>
    </button>
  );
}

export default Button;

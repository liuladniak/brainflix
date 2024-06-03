import "./Button.scss";

function Button({ children, iconUrl }) {
  return (
    <button className="btn header__btn">
      <img src={iconUrl} alt="Upload button icon" />
      {children}
    </button>
  );
}

export default Button;

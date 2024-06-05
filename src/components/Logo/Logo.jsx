import logo from "../../assets/logo/BrainFlix-logo.svg";

function Logo() {
  return (
    <div className="header__logo">
      <a href="/">
        <img src={logo} alt="BrainFlix logo" />
      </a>
    </div>
  );
}

export default Logo;

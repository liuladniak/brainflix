import { Link } from "react-router-dom";
import logo from "../../assets/logo/BrainFlix-logo.svg";

function Logo() {
  return (
    <div className="header__logo">
      <Link to="/">
        <img src={logo} alt="BrainFlix logo" />
      </Link>
    </div>
  );
}

export default Logo;

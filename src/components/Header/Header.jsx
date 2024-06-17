import "./Header.scss";
import uploadIcon from "../../assets/icons/upload.svg";
import avatarIcon from "../../assets/images/Mohan-muruge.jpg";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

function Header() {
  return (
    <header className="header-section">
      <div className="header">
        <Logo />
        <div className="header-wrp">
          <Search />
          <Avatar avatarUrl={avatarIcon} className="avatar-position" />
          <Button iconUrl={uploadIcon} to="/upload" className="btn--upload">
            Upload
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;

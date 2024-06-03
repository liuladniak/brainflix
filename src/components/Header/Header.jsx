import "./Header.scss";
import uploadIcon from "../../assets/icons/upload.svg";
import avatarIcon from "../../assets/images/Mohan-muruge.jpg";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

function Header() {
  return (
    <header className="header">
      <Logo />
      <div className="header-wrp">
        <Search />
        <Avatar avatarUrl={avatarIcon} />
        <Button iconUrl={uploadIcon}>Upload</Button>
      </div>
    </header>
  );
}

export default Header;

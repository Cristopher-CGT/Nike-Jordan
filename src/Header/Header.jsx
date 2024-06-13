import nikeLogo from "../assets/Nike,_Inc.-White-Logo.wine.svg";
import profileIcon from "../assets/profileIcon.svg";
import bagIcon from "../assets/bagIcon.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header-page">
      <div>
        <img src={nikeLogo} alt="Nike logo" className="Nike-Logo" />
      </div>
      <div className="menu">
        <p> New & Featured </p>
        <p> Men </p>
        <p> Women </p>
        <p> Kids </p>
        <p> Jordan </p>
      </div>
      <div className="profile-icons">
        <img src={profileIcon} alt="profile" className="icon profile" />
        <img src={bagIcon} alt="bag" className="icon bag" />
      </div>
    </header>
  );
}

export default Header;

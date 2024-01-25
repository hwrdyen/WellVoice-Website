import "./NavBar.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/wellvoice-logo.png";

const NavBar = () => {
  return (
    <>
      <div className="NavBar__Container">
        <Link to="/">
          <img src={Logo} alt="WellVoice Logo" className="NavBar__Logo" />
        </Link>

        <ul className="NavBar__ServiceList">
          <li className="NavBar__ServiceList--item">Features</li>
          <li className="NavBar__ServiceList--item">Resources</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;

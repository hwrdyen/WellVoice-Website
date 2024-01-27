import "./Footer.scss";
// import { Link } from "react-router-dom";
// import Logo from "../../assets/logos/wellvoice-logo.png";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="Footer__Container">
      <div className="Footer__TitleContainer">
        <div className="Footer__Title">About Us</div>
        <div className="Footer__Title">Careers</div>
        <div className="Footer__Title">Contact Us</div>
        <div className="Footer__Title">Privacy</div>
      </div>
      <div className="Footer__Info">
        <div className="Footer__Info--right">© 2024 WellVoice Corp.</div>
        <div className="Footer__Info--sociallist">
          <SocialIcon
            url="https://www.linkedin.com/company/wellvoice/"
            bgColor="white"
            fgColor="#4d4d4d"
            className="Footer__Info--socialitem"
          />
          <SocialIcon
            url="https://www.facebook.com"
            bgColor="white"
            fgColor="#4d4d4d"
            className="Footer__Info--socialitem"
          />
          <SocialIcon
            url="https://www.instagram.com"
            bgColor="white"
            fgColor="#4d4d4d"
            className="Footer__Info--socialitem"
          />
          <SocialIcon
            url="https://www.twitter.com"
            bgColor="white"
            fgColor="#4d4d4d"
            className="Footer__Info--socialitem"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

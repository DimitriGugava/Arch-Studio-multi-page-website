import "./footer.css";
import footerArch from "../icon/footerArch.svg";
import footerArrow from "../icon/footerArrow.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_Main_Cont">
      <img className="arch_Footer_Icon" src={footerArch} alt="Icon" />
      <div className="footer_Page_Option_List_Box">
        <a className="footer_options">Portfolio</a>
        <a className="footer_options">About Us</a>
        <Link className="footer_options" to="/contact">
          Contact
        </Link>
      </div>
      <Link className="footer_Button" to="/portfolio">
        See our Portfolio
        <img className="footer_Button_Arrow" src={footerArrow} />
      </Link>
    </div>
  );
};

export default Footer;

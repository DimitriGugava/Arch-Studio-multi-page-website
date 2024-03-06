import "./footer.css";
import footerArch from "../icon/footerArch.svg";
import footerArrow from "../icon/footerArrow.png";

const Footer = () => {
  return (
    <div className="footer_Main_Cont">
      <img className="arch_Footer_Icon" src={footerArch} alt="Icon" />
      <div className="footer_Page_Option_List_Box">
        <a className="footer_options">Portfolio</a>
        <a className="footer_options">About Us</a>
        <a className="footer_options">Contact</a>
      </div>
      <button className="footer_Button">
        See our Portfolio
        <img className="footer_Button_Arrow" src={footerArrow} />
      </button>
    </div>
  );
};

export default Footer;

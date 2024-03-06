import "./header.css";
import menu from "../icon/menu.svg";
import arch from "../icon/arch.svg";
const Header = () => {
  return (
    <div className="header_Main_Cont">
      <div className="header_Content_Box">
        <img className="header_Text_Icon" src={arch} alt="Arch_Text" />
        <img className="header_Menu_Bar" src={menu} alt="Menu_Bar" />
      </div>
    </div>
  );
};
export default Header;

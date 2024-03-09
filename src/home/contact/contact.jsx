import "./contact.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import contactphoto from "../../icon/contactphoto.png";
import map from "../../icon/map.png";
import location from "../../icon/location.svg";
import arrow from "../../icon/footerArrow.png";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="contact_Page_Cont">
        <img className="contact_Page_Image" src={contactphoto} />
        <div className="contact_Page_TellUs_Text_Box">
          <span className="contact_Page_TellUs_Heading">
            Tell us about your project
          </span>
          <span className="contact_Page_TellUs_Para">
            We’d love to hear more about your project. Please, leave a message
            below or give us a call. We have two offices, one in Texas and one
            in Tennessee. If you find yourself nearby, come say hello!
          </span>
        </div>
        <div className="conact_Page_Div"></div>
        <div className="contact_Page_Details_Box">
          <span className="contact_Page_Details_Box_Header">
            Contact Details
          </span>
          <div className="contact_Page_Details_Box_OFfice_Box">
            <span className="contact_Page_Details_Box_OFfice_Box_Header">
              Main Office
            </span>
            <span className="contact_Page_Details_Box_OFfice_Box_Mail">
              Mail : archone@mail.com
            </span>
            <span className="contact_Page_Details_Box_OFfice_Box_Adress">
              Address : 1892 Chenoweth Drive TN
            </span>
            <span className="contact_Page_Details_Box_OFfice_Box_Phone">
              Phone : 123-456-3451
            </span>{" "}
            <span className="concat_Page_Map_Textual_Box">View On Map</span>
          </div>{" "}
          <div className="contact_Page_Details_Box_OFfice_Box">
            <span className="contact_Page_Details_Box_OFfice_Box_Header">
              Main Office
            </span>
            <span className="contact_Page_Details_Box_OFfice_Box_Mail">
              Mail : archone@mail.com
            </span>
            <span className="contact_Page_Details_Box_OFfice_Box_Adress">
              Address : 1892 Chenoweth Drive TN
            </span>
            <span className="contact_Page_Details_Box_OFfice_Box_Phone">
              Phone : 123-456-3451
            </span>{" "}
            <span className="concat_Page_Map_Textual_Box">View On Map</span>
          </div>
          <div className="concat_Page_Map_Map_Box">
            <img className="concat_Page_Map_Map" src={map} alt="Map" />
            <img className="location" src={location} />{" "}
            <img className="location2" src={location} />
            <div className="fetchedMap"></div>
          </div>
        </div>
        <div className="contact_Page_Form_Box">
          <span className="contact_Page_Form_Box_Header">Connect With Us</span>
          <form className="contact_Page_Form">
            <input
              className="contact_Page_Form"
              type="text"
              placeholder="Your Name"
            />
            <div className="form_Div"></div>
            <input
              className="contact_Page_Form"
              type="text"
              placeholder="Your Email"
            />
            <div className="form_Div"></div>
            <textarea
              className="contact_Page_Form"
              type="text"
              placeholder="Message"
            />
            <div className="form_Div"></div>
            <button className="contact_Page_Form_Button">
              <img className="contact_Arrow" src={arrow} />
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Contact;

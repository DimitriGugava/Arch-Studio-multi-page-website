import "./aboutus.css";
import Header from "../../header/header";
import Footer from "../../footer/footer";

import aboutusprofilephoto from "../../icon/aboutusprofilephoto.png";
import aboutusbackimage from "../../icon/aboutusbackimage.png";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className="about_Us_Box">
        <img className="about_Us_Header_Image" src={aboutusbackimage} />
        <div className="about_Us_TeamDescr_Box">
          <span className="about_Us_TeamDescr_Header">
            Your Team of Professionals
          </span>
          <span className="about_Us_TeamDescr_SmallText">
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </span>
        </div>
        <div className="about_Us_Line"></div>
        <div className="aboutUs_OurHeritage_box">
          <span className="aboutUs_OurHeritage_Header">Our Heritage</span>
          <span className="aboutUS_OurHeritage_SmallText">
            <div>
              Founded in 2007, we started as a trio of architects. Our
              complimentary skills and relentless attention to detail turned
              Arch into one of the most sought after boutique firms in the
              country.
            </div>
            &nbsp;
            <div>
              Speciliazing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their
              surroundings. We consider every detail from every surrounding
              element to inform our designs.
            </div>
            &nbsp;
            <div>
              Our small team of world-class professionals provides input on
              every project.
            </div>
          </span>
        </div>
        <div className="about_Us_theLeaders_Box">
          <h1 className="about_Us_theLeaders_Header_Text">The Leaders</h1>
          <div className="about_Us_theLeaders_Profile_Box">
            <img
              className="about_Us_theLeaders_Profile_Box_Image"
              src={aboutusprofilephoto}
            />
            <div className="about_Us_TheLeaders_ProfileTextual_Box">
              <span className="about_Us_TheLeaders_ProfileTextual_Header">
                Jake Richards
              </span>
              <span className="about_Us_TheLeaders_ProfileTextual_SmallText">
                Chief Architect
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;

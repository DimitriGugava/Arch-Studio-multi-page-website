import "./allprojects.css";
import projectphoto from "../../icon/projectphoto.png";
import Header from "../../header/header";
import Footer from "../../footer/footer";

const AllProjects = () => {
  return (
    <>
      <Header />
      <div className="allprojects_Container">
        <div className="all_Project_Box">
          <img className="allProject_Image" src={projectphoto} />
          <div className="allProject_Box_Textual_box">
            <div className="allProject_Box_Header">Seraph Station</div>
            <span className="allProject_Box_Small_Text">September 2019</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProjects;

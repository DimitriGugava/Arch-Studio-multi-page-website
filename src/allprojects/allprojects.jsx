import "./allprojects.css";
import projectphoto from "../icon/projectphoto.png";
import Header from "../../header/header";
import Footer from "../../footer/footer";

const AllProjects = () => {
  return (
    <>
      <Header />
      <div className="allprojects_Container">
        <div className="all_Project_Box" src={projectphoto}>
          <img className="allProject_Image" />
          <div className="allProject_Box_Header">Seraph Station</div>
          <span className="allProject_Box_Small_Text">September 2019</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProjects;

import "./home.css";
import paramour from "../icon/paramour.png";
import arrow from "../icon/footerArrow.png";
import aboutus from "../icon/aboutus.png";
import projectphoto from "../icon/projectphoto.png";

const Home = () => {
  return (
    <div className="home_Page_Container">
      <div className="home_Page_See_Portfolio_Box">
        <img className="home_Page_See_Portfolio_Background" src={paramour} />
        <div className="home_Page_See_Porftolio_Content">
          <div className="home_Page_See_Porftolio_Content_Header">
            Project Paramour
          </div>
          <span className="home_Page_See_Porftolio_Content_Small_Text">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </span>
          <button className="home_Page_See_Porftolio_Content_Button">
            See our Portfolio
            <img
              className="home_Page_See_Porftolio_Content_Button_Arrow"
              src={arrow}
            />
          </button>
        </div>
        <div className="project_Changer_Box">
          <div className="project_Changer_Box_Indicator">1</div>
          <div className="project_Changer_Box_Indicator">2</div>
          <div className="project_Changer_Box_Indicator">3</div>
          <div className="project_Changer_Box_Indicator">4</div>
        </div>
      </div>
      <div className="home_Page_Welcome">
        <div className="home_Page_Welcome_Header">Welcome to Arch Studio</div>
        <span className="home_Page_Welcome_Small_Text">
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results. Over the past 10 years, we have worked on all kinds of
          projects. From stations to high-rise buildings, we create spaces that
          inspire and delight. We work closely with our clients so that we
          understand the intricacies of each project. This allows us to work in
          harmony the surrounding area to create truly stunning projects that
          will stand the test of time.
        </span>
      </div>
      <div className="main_Page_About_Us_Box">
        <img className="main_Page_About_Us_Background" src={aboutus} />
        <div className="main_Page_About_Us_Header">Small Team, big ideas</div>
        <button className="main_Page_About_Us_Button">
          About Us <img className="main_Page_About_Us_Arrow" src={arrow} />
        </button>
      </div>
      <div className="main_Page_Featured_Box">
        <div className="main_Page_Featured_Header">Featured</div>
        <div className="main_Page_Featured_Project_Box">
          <img
            className="main_Page_Featured_Project_Box_Background"
            src={projectphoto}
          />
          <div className="main_Page_Featured_Project_Box_Header">
            Project Del Sol
          </div>
          <a className="main_Page_Featured_Project_Box_Small_Text">
            View All Projects
          </a>
        </div>
        <div className="main_Page_Featured_Project_Box">
          <img
            className="main_Page_Featured_Project_Box_Background"
            src={projectphoto}
          />
          <div className="main_Page_Featured_Project_Box_Header">
            228B Tower
          </div>
          <a className="main_Page_Featured_Project_Box_Small_Text">
            View All Projects
          </a>
        </div>
        <div className="main_Page_Featured_Project_Box">
          <img
            className="main_Page_Featured_Project_Box_Background"
            src={projectphoto}
          />
          <div className="main_Page_Featured_Project_Box_Header">
            Le Prototype
          </div>
          <a className="main_Page_Featured_Project_Box_Small_Text">
            View All Projects
          </a>
        </div>
        <div className="main_Page_Featured_See_More_Btn">
          See All{" "}
          <img className="main_Page_Featured_See_More_Arrow" src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default Home;

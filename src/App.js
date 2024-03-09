import Home from "./home/home";
import AllProjects from "./home/allprojects/allprojects";
import AboutUs from "./home/aboutus/aboutus";
import Contact from "./home/contact/contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Don't forget to import BrowserRouter

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<AllProjects />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

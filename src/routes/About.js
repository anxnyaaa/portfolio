import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroProjects from "../components/HeroText";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroProjects
        heading="ABOUT"
        text="I'm a Friendly Designer and Front-end Developer."
      />
      <AboutContent/>
      <Footer />
    </div>
  );
};

export default About;

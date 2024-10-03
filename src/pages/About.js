import React from "react";
import Nav from '../components/Nav/Nav.js';
import Footer from '../components/Footer/Footer.js';
import AboutPage from "../components/AboutPage/AboutPage.js";

const About = () => {
    return (
        <div className="about-container">
            <Nav active="About"/>
            <AboutPage />
           <Footer />
        </div>
      );
    };
    
    export default About;
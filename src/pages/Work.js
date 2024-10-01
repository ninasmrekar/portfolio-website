import React from "react";
import Nav from '../components/Nav/Nav.js';
import Footer from '../components/Footer/Footer.js';
import WorkPage from "../components/WorkPage/WorkPage.js";

const Work = () => {
    return (
        <div className="work-container">
            <Nav />
            <WorkPage />
           <Footer />
        </div>
      );
    };
    
    export default Work;
import React from "react";
import { useParams } from "react-router-dom";
import Nav from '../components/Nav/Nav.js';
import ProjectPage from "../components/ProjectPage/ProjectPage.js";
import Footer from "../components/Footer/Footer.js";

const Project = () => {
    let { id } = useParams();

    return (
        <div className="project-container">
          <Nav active=""/>
          <ProjectPage id={id}/>
          <Footer />
        </div>
      );
    };
    
    export default Project;

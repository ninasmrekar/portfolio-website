import React from "react";
import "./ProjectPage.scss"
import Paragraph from '../Paragraph/Paragraph.js';
import ProjectImage from '../ProjectImage/ProjectImage.js';
import projects from "../../projects.js";
import Heading2 from "../Heading2/Heading2.js";

function ProjectPage(props){
    let project = projects.find(item => item.id.toString() === props.id);

    return (
    <main className="project-page">
        <ProjectImage src={project.image} alt={project.title}/>
        <section>
            <Heading2 content={project.title.toUpperCase()}/>
            <Paragraph content={project.description}/>
            <a href={project.link}><button class="view-btn">VIEW PROJECT</button></a>
        </section>
    </main>
   );
} 

export default ProjectPage;

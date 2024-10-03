import React from "react";
import "./WorkPage.scss"
import Heading2 from '../Heading2/Heading2.js';
import WorkItem from "../WorkItem/WorkItem.js";
import Paragraph from "../Paragraph/Paragraph.js";
import projects from "../../projects.js";

function WorkPage(){
    function addProjects(project){
        return (<WorkItem key={project.id} id={project.id} src={project.image} alt={project.title}/>);
    }

    return (
        <main class="work-page">
            <Heading2 content="WORK"/>
            <Paragraph content="Click on the projects to see more information!"/>
            <section className="work-gallery">
                {projects.map(addProjects)}
            </section>
        </main>
    );
} 

export default WorkPage;

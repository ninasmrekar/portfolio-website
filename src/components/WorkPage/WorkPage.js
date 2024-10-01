import React from "react";
import "./WorkPage.scss"
import Heading2 from '../Heading2/Heading2.js';
import WorkItem from "../WorkItem/WorkItem.js";
import projects from "../../projects.js";

function WorkPage(){
    function addProjects(project){
        return (<WorkItem key={project.id} src={project.image} alt={project.title}/>);
    }

    return (
        <main class="work-page">
            <Heading2 content="WORK"/>
            <section className="work-gallery">
                {projects.map(addProjects)}
            </section>
        </main>
    );
} 

export default WorkPage;

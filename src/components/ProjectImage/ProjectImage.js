import React from "react";
import "./ProjectImage.scss"

function ProjectImage(props){
    return (
        <img className="project-img" src={props.src} alt={props.alt}/>
    );
} 

export default ProjectImage;

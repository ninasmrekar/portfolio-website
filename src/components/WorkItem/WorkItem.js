import React from "react";
import "./WorkItem.scss"

function WorkItem(props){
    return (
        <a href={"/work/" + props.id}><div className="work-item">
            <img src={props.src} alt={props.alt}/>
        </div></a>
    );
} 

export default WorkItem;

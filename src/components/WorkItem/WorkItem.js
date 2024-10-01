import React from "react";
import "./WorkItem.scss"

function WorkItem(props){
    return (
        <div className="work-item">
            <img src={props.src} alt={props.alt}/>
        </div>
    );
} 

export default WorkItem;

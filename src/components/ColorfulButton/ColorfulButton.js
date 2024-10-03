import React from "react";
import "./ColorfulButton.scss"

function ColorfulButton(props){
    return (
        <a href="mailto: smrekar.nina5@gmail.com"><button className="btn btn-primary colorful-btn">{props.content}</button></a>
    );
} 

export default ColorfulButton;

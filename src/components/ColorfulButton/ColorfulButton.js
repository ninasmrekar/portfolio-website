import React from "react";
import "./ColorfulButton.scss"

function ColorfulButton(props){
    return (
        <a href="/contact"><button class="colorful-btn">{props.content}</button></a>
    );
} 

export default ColorfulButton;

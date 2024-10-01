import React from "react";
import "./TextArea.scss"

function TextArea(props){
    return (
        <textarea name={props.name} placeholder={props.placeholder} rows={props.rows} required></textarea>
    );
} 

export default TextArea;

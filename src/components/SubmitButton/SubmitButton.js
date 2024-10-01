import React from "react";
import "./SubmitButton.scss"

function SubmitButton(props){
    return (
        <button type="submit" name={props.name}>{props.content}</button>
    );
} 

export default SubmitButton;

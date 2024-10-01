import React from "react";
import "./SubmitButton.scss"

function SubmitButton(props){
    return (
        <button class="submit-btn" type="submit" name={props.name}>{props.content}</button>
    );
} 

export default SubmitButton;

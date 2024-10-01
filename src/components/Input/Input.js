import React from "react";
import "./Input.scss"

function Input(props){
    return (
        <input type={props.type} name={props.name} placeholder={props.placeholder} required/>
    );
} 

export default Input;

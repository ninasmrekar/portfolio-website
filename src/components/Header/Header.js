import React from "react";
import "./Header.scss"
import Heading1 from '../Heading1/Heading1.js';
import Heading2 from '../Heading2/Heading2.js';
import ColorfulButton from "../ColorfulButton/ColorfulButton.js";

function Header(){
    return (
        <header>
            <Heading1 content="NINA SMREKAR" />
            <Heading2 content="WEB DEVELOPER" />
            <ColorfulButton content="CONTACT ME" />            
        </header>
    );
} 

export default Header;
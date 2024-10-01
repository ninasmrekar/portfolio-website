import React from "react";
import "./Header.scss"
import Heading1 from '../Heading1/Heading1.js';
import Heading2 from '../Heading2/Heading2.js';

function Header(){
    return (
        <header>
            <Heading1 content="NINA SMREKAR" />
            <Heading2 content="WEB DEVELOPER" />
        </header>
    );
} 

export default Header;
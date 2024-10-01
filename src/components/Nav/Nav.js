import React from "react";
import "./Nav.scss"

function Nav(){
    return (
        <nav>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/work">WORK</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </nav>
    );
} 

export default Nav;
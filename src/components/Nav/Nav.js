import React from "react";
import "./Nav.scss"

function Nav(props){
  return (
      <nav>
        <ul>
          <li><a href="/" className={props.active === "Home" ? "active" : "normal"}>HOME</a></li>
          <li><a href="/work" className={props.active === "Work" ? "active" : "normal"}>WORK</a></li>
          <li><a href="/about" className={props.active === "About" ? "active" : "normal"}>ABOUT</a></li>
        </ul>
      </nav>
  );
} 

export default Nav;
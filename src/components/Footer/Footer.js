import React from "react";
import "./Footer.scss"

function Footer(){
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div>
                <p>Copyright © {currentYear} Nina Smrekar. All Rights Reserved.</p>
            </div>
        </footer>
    );
} 

export default Footer;

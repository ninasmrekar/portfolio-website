import React from "react";
import "./Footer.scss"

function Footer(){
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright © {currentYear} Nina Smrekar. All Rights Reserved.</p>
            <div className="icons">
                <a href="mailto: smrekar.nina5@gmail.com"><img className="icon" src="/icons/email.svg" alt="email icon"/></a>
                <a href="https://github.com/ninasmrekar"><img className="icon" src="/icons/github.svg" alt="github icon"/></a>
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><img className="icon" src="/icons/linkedin.svg" alt="linkedin icon"/></a>
                <a href="https://www.instagram.com/nina.sm_5/"><img className="icon" src="/icons/instagram.svg" alt="instagram icon"/></a>
            </div>
        </footer>
    );
} 

export default Footer;

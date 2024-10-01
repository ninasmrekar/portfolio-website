import React from "react";
import "./AboutPage.scss"
import Paragraph from '../Paragraph/Paragraph.js';
import Heading2 from '../Heading2/Heading2.js';
import ProfileImage from '../ProfileImage/ProfileImage.js';

function AboutPage(){
    return (
        <main className="about-page">
            <ProfileImage />
            <section>
                <Heading2 content="ABOUT ME"/>
                <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
            </section>
    </main>
   );
} 

export default AboutPage;

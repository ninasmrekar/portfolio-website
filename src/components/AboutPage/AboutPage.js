import React from "react";
import "./AboutPage.scss"
import Paragraph from '../Paragraph/Paragraph.js';
import Heading2 from '../Heading2/Heading2.js';
import ProfileImage from '../ProfileImage/ProfileImage.js';

function AboutPage(){
    return (
        <main className="about-page">
            <ProfileImage />
            <section className="about-section">
                <Heading2 content="ABOUT ME"/>
                <Paragraph content="Hey there, I am Nina, a web developer based in Zurich, Switzerland. 
                    I have completed a four-year apprenticeship as Application Developer and am currently studying at Eastern Switzerland University of Applied Sciences.
                    I create and design web applications. I work on frontend and backend and am familiar with technologies like React, JavaScript, Node.js, HTML, Bootstrap, CSS, Java and C#.
                    On this website you can find some of my projects that I worked on in the past. I am a hardworking person with many interests who is constantly trying to learn something new.
                    In my freetime I like to read, walk with my dog, draw and bake. If you are interested in my work feel free to contact me."/>
            </section>
    </main>
   );
} 

export default AboutPage;

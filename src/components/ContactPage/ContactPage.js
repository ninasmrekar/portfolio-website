import React from "react";
import "./ContactPage.scss"
import Heading2 from '../Heading2/Heading2.js';
import ContactForm from '../ContactForm/ContactForm.js';

function ContactPage(){
    return (
        <main class="contact-page">
            <Heading2 content="CONTACT ME"/>
            <ContactForm />
        </main>
    );
} 

export default ContactPage;

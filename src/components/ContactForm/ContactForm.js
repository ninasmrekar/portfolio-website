import React from "react";
import "./ContactForm.scss"
import Input from '../Input/Input.js';
import TextArea from '../TextArea/TextArea.js';
import SubmitButton from '../SubmitButton/SubmitButton.js';

function ContactForm(){
    return (
        <form>
            <Input type="text" name="name" placeholder="Name *" />
            <Input type="text" name="email" placeholder="E-Mail *" />
            <Input type="text" name="subject" placeholder="Subject *" />
            <TextArea placeholder="Message *" rows="10" />
            <SubmitButton name="send-btn" content="SEND" />
        </form>
    );
} 

export default ContactForm;

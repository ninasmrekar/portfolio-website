import React from "react";
import Nav from '../components/Nav/Nav.js';
import Footer from '../components/Footer/Footer.js';
import ContactPage from '../components/ContactPage/ContactPage.js';

const Contact = () => {
    return (
        <div className="container">
          <Nav />
          <ContactPage />
          <Footer />
        </div>
      );
    };
    
    export default Contact;
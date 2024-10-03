import React from "react";
import Header from '../components/Header/Header.js';
import Nav from '../components/Nav/Nav.js';

const Home = () => {
    return (
        <div className="home-container">
          <Header />
          <Nav active="Home"/>
        </div>
      );
    };
    
    export default Home;

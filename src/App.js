import React from 'react';
import "./App.css";
import Navbar from "./components/Nav/Navbar";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About";
// import AOS from 'aos';
import 'aos/dist/aos.css';
import Form from "./components/Book/form";

function App() {

  return (

    <div className="containz">

          <Navbar />

          <section className="home">
            <Home />
          </section>
            
          <section className="about">
            <About/>
          </section>

          <section className="projects">
            <Portfolio />       
          </section>

          <section className="contact">
            <Form />
          </section>
          
    </div>

  );
}

export default App;

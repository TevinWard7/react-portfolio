import React, { useEffect } from 'react';
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({duration: 1000})
  }, [])

  return (
    <Router>
        <Navbar />

        <Route exact path="/">

            <Home />
          
          <div data-aos="fade-right">
              <About/>
          </div>

          <div>
            <Portfolio />       
          </div>
          
          <div data-aos="fade-up">
              <Contact />
          </div>

        </Route>

        <div data-aos="fade-right">
          <Route exact path="/about">
            <About/>
          </Route>
        </div>
        
        <div>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </div>

        <div data-aos="fade-up">
          <Route exact path="/contact">
            <Contact />
          </Route>
        </div>
        
    </Router>
  );
}

export default App;

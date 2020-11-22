import React, { useEffect } from "react";
import "./nav.css";
import logo from "./img/tevinlogo.png";
import anime from 'animejs/lib/anime.es.js';

const Navbar = () => {


return(
    <header>

      <a href="/">
        {/* <img class="logo" src={logo} alt="logo" width="75" height="75" style={{zIndex: 10}}/> */}
        </a>

      <nav className="nav-links" style={{zIndex: 10}}>
        <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Selected Works</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
            
      </nav>

    </header>

)

};

export default Navbar;
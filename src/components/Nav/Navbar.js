import React, { useEffect } from "react";
import "./nav.css";
import logo from "../../components/Nav/img/tevinlogo.png";
// import anime from 'animejs/lib/anime.es.js';

const Navbar = () => {

  useEffect(() => {

    // anime({
    //   targets: '.logo',
    //   rotate: 360, 
    //   loop: true,
    //   easing: 'linear',
    //   duration: 3000
    // });

  },[])

return(
    <header>

      <a href="/">
        <img className="logo" src={logo} alt="logo" width="75" height="75" style={{zIndex: 10000}}/>
      </a>

      <nav className="nav-links" style={{zIndex: 0}}>
        
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
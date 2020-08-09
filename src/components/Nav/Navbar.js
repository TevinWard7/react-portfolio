import React, { useEffect } from "react";
import "./nav.css";
import logo from "./img/tevinlogo.png";
import anime from 'animejs/lib/anime.es.js';

const Navbar = () => {

    useEffect(() => {
        anime({
            targets: '.logo',
            rotate: 360, 
            loop: true,
            easing: 'linear',
            duration: 3000
          });
    });

return(
    <nav id="navbar" class="navbar navbar-expand-md">

    <div class="navbar w-100 order-1 ">

        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a href="/"><img class="logo" src={logo} alt="logo" width="75" height="75" /></a>
            </li>
        </ul>
        
    </div>

    <div class="mx-auto order-0">
        {/* <a class="navbar-brand mx-auto"></a> */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>

    <div class="navbar w-100 order-3">

        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link active" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/portfolio">Selected Works</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        </ul>

    </div>

</nav>
)

};

export default Navbar;
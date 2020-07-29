import React from "react";
import "./nav.css";
import logo from "./img/tevinlogo.png";

const Navbar = () => {

return(
    <nav id="navbar" class="navbar navbar-expand-md">

    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <img src={logo} alt="logo" width="75" height="75" />
            </li>
        </ul>
    </div>

    <div class="mx-auto order-0">
        {/* <a class="navbar-brand mx-auto"></a> */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>

    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
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
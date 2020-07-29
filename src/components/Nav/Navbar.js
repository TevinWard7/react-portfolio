import React from "react";
import "./nav.css"

const Navbar = () => {

return(
    <>
    <ul id="navbar" class="nav justify-content-end">

<div class="navbar-brand">

</div>

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
    </>
)
};

export default Navbar;
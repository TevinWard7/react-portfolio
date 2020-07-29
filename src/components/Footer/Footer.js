import React from "react";
import "./footer.css";
import gitImg from "./img/github.png";
import linkdIMg from "./img/linkedin.png"

const Footer = () => {
    return(
    <footer className="row">

        <div className="col-12">
            <ul>
                <li><a href="https://www.linkedin.com/in/tevin-ward-bb1494150/" ><img src={linkdIMg} alt="github-link" height="30" width="30" /></a></li>
                <li><a href="https://github.com/TevinWard7"><img src={gitImg} alt="github-link" height="30" width="30" /></a></li>
            </ul>
            <div>© 2020, Tevin Ward</div>
        </div>

    </footer>
    )
}

export default Footer;
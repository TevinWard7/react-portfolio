import React from "react";
import "./footer.css";
// import gitImg from "./img/github.png";
// import linkdIMg from "./img/linkedi.png";

const Footer = () => {
    return(
    <footer>
        <div className="row">

        <div className="col-12" id="menu-outer">
            {/* <div class="table">
                <ul id="horizontal-list">
                    <li><a href="https://github.com/TevinWard7"><img src={gitImg} alt="github-link" height="30" width="30" /></a></li>
                    |
                    <li><a href="https://www.linkedin.com/in/tevin-ward-bb1494150/" ><img src={linkdIMg} alt="github-link" height="30" width="30" /></a></li>
                </ul>
            </div> */}
        </div>
        </div>

        <div className="row">
            <div className="col-4 bar">

            </div>
            <div className="col-4 bar">
               
            </div>
            <div className="col-4">
            {/* <a href="https://github.com/TevinWard7">  <img src={gitImg} alt="github-link" height="30" width="30" />  </a>|
            <a href="https://www.linkedin.com/in/tevin-ward-bb1494150/" >  <img src={linkdIMg} alt="github-link" height="30" width="30" />  </a> */}
            ©
            </div>

        </div>

    </footer>
    )
}

export default Footer;
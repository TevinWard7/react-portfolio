import React from "react";
import Resume from "./content/tevin_ward_resume.pdf";
import gitImg from "./img/github.png";
import linkdIMg from "./img/linkedi.png"
import "./style.css";

const About = () => {
    return(
        <div class="row myContainer">

        <div class="col-12">
            <p class="linked-pages-text">Programmer based out of Goldsboro, North Carolina with a coding certification from UNC Chapel Hill Full Stack Developer Bootcamp</p>

            <br/>

            <a id="resume-link" href={Resume}><h5>Resume</h5></a>

            <br/>

            <a href="https://github.com/TevinWard7">  <img src={gitImg} alt="github-link" height="30" width="30" />  </a>|
            <a href="https://www.linkedin.com/in/tevin-ward-bb1494150/" >  <img src={linkdIMg} alt="github-link" height="30" width="30" />  </a>

        </div>

    </div>
    )
};

export default About;
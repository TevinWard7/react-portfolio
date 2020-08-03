import React from "react";
import Resume from "./content/tevin_ward_resume.pdf";
import "./style.css";

const About = () => {
    return(
        <div class="row myContainer">

        <div class="col-12">
            <p class="linked-pages-text">Web Developer based out of Goldsboro, North Carolina</p>

            <a id="resume-link" href={Resume}> Resume </a>
        </div>

    </div>
    )
};

export default About;
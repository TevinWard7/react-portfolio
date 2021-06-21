import React from "react";
// import Resume from "./content/tevin_ward_resume.pdf";
import gitImg from "./img/github.png";
import linkdIMg from "./img/linkedi.png";
import "./about.css";


const About = () => {

    return(
        <>
            <div class="myContainer" id="about">
                <div></div>
                <p>

                    {/* <h2>Hello</h2> */}
                    Full-stack dev based out of Raliegh, North Carolina passionate about effeciency, DRY semantic code, user freindly applications, and learning new tech!

                    <br/>
                    
                    <p id="para-2">
                    Main tech stack:
                    <br/>
                    MERN MongoDB, Express, React, Node.js.
                     JavaScript (ES6),  HTML & CSS
                     </p>
                </p>

                {/* <br/> */}

                {/* <button><a id="resume-link" href={Resume}><h5>Resume</h5></a></button> */}

                {/* <br/>
                <br/>
                <br/> */}

                <a href="https://github.com/TevinWard7">  <img src={gitImg} alt="github-link" height="30" width="30" />  </a>|
                <a href="https://www.linkedin.com/in/tevin-ward-bb1494150/" >  <img src={linkdIMg} alt="github-link" height="30" width="30" />  </a>
                
            </div>
        </>
    )
};

export default About;
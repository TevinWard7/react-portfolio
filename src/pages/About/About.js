import React from "react";
import Resume from "./content/tevin_ward_resume.pdf";
import gitImg from "./img/github.png";
import linkdIMg from "./img/linkedi.png";
import "./about.css";


const About = () => {

    return(
        <>
            <div class="myContainer" id="about">
                
                <p>

                    <h2>Hello</h2>
                    I'm Tevin Ward. A full-stack developer based out of Raliegh, North Carolina with a coding certification from UNC Chapel Hill Bootcamp. Passionate about solving programming challenges while learning as well as creating meaningful and beautiful applications.

                    <br/>
                    <br/>
                    <strong>Proficiencies:</strong>
                    <br/>
                    MongoDB, Express.js, React.js, Node.js, JavaScript (ES6),  HTML CSS
                </p>

                <br/>

                <button><a id="resume-link" href={Resume}><h5>Resume</h5></a></button>

                <br/>
                <br/>
                <br/>

                <a href="https://github.com/TevinWard7">  <img src={gitImg} alt="github-link" height="30" width="30" />  </a>|
                <a href="https://www.linkedin.com/in/tevin-ward-bb1494150/" >  <img src={linkdIMg} alt="github-link" height="30" width="30" />  </a>
                
            </div>
        </>
    )
};

export default About;
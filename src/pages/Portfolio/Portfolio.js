import React, {useEffect} from "react";
import "./portfolio.css";
import burgerImg from "./img/burger.png";
import weatherImg from "./img/weather.png";
import happeningsImg from "./img/happenings.png";
import employeeImg from "./img/employee.png";
import anime from 'animejs/lib/anime.es.js';

const Portfolio = () => {

    useEffect(() => {
        
        anime({
            targets: '.linksContainer',
              rotate: {
                value: 360,
                duration: 1000,
                easing: 'easeInOutSine'
              }
          });

    },[])

    return(
        <>
    <div class="linksContainer">

        <div className="row" id="app-2-container">

        <div className="col-lg-4 col-md-0"></div>

            <div className="col-lg-4 col-md-8">
                <div className="container" id="app-2">
                    <img src={burgerImg} alt="Bueger Site" width="300" height="300" className="folio-image"
                        id="folio-image-2" ></img>
                  
                    <div className="text" id="text-2"><a href="https://github.com/TevinWard7/Eat-Da-Burger.git"
                            className="inside-text">GitHub</a><span class="inside-text"> | </span><a
                            href="https://eat-da-burger-app-7.herokuapp.com/" className="inside-text">Live
                            Site</a>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-8" id="app-2-details">
                <div >
                <p>Like burgers? Make a list of some you want to eat and keep note of wich ones you've eaten</p>
                <p>Tech Used:</p>
                <p>HTML, CSS, Bootstrap, Javascript, JQuery, Node.js, Express, Handlebars and MySQL</p>
                </div>
            </div>

        </div>

        <br/>
        <br/>

        <div className="row" id="app-1-container">

            <div className="col-lg-4 col-md-0"></div>

            <div className="col-lg-4 col-md-8">
                <div className="container" id="app-1">
                    <img src={employeeImg} alt="Portfolio Site" width="300" height="300" className="folio-image"
                        id="folio-image-1" ></img>
                  
                    <div className="text" id="text-1"><a href="https://github.com/TevinWard7/Employee-Directory.git"
                            className="inside-text">GitHub</a><span class="inside-text"> | </span><a
                            href="https://competent-kirch-beaaac.netlify.app/" className="inside-text">Live
                            Site</a>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-8" id="app-1-details">
                <p>Search a list of employees by name and see who's playing what role</p>
                <p>Tech Used:</p>
                <p>React, JSX, JSON, React Hooks and CSS</p>
            </div>

        </div>

        <br/>
        <br/>

        <div className="row" id="app-3-container">

            <div className="col-lg-4 col-md-0"></div>

            <div className="col-lg-4 col-md-8">
                <div className="container" id="app-3">
                    <img src={weatherImg} alt="Portfolio Site" width="300" height="300" class="folio-image"
                        id="folio-image-3"></img>
                    
                    <div className="text" id="text-3"><a href="https://github.com/TevinWard7/Weather_Dashboard.git"
                            class="inside-text">GitHub</a><span class="inside-text"> | </span><a
                            href="https://tevinward7.github.io/Weather_Dashboard/" className="inside-text">Live
                            Site</a>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-8" id="app-3-details">
                <p>See a 5 day weather forecast in a city of your choosing</p>
                <p>Tech Used:</p>
                <p>HTML, CSS, Bootstrap, Javascript, JQuery, Node.js, Express, Handlebars and MySQL</p>
            </div>

        </div>

        <br/>
        <br/>

        <div className="row" id="app-4-container">

            <div className="col-lg-4 col-md-0"></div>

            <div className="col-lg-4 col-md-8">
                <div className="container" id="app-4">
                    <img src={happeningsImg} alt="Portfolio Site" width="300" height="300" class="folio-image"
                        id="folio-image-4"></img>
                    
                    <div className="text" id="text-4"><a href="https://github.com/TevinWard7/Happenings.git"
                            class="inside-text">GitHub</a><span class="inside-text"> | </span><a
                            href="https://what-happenings.herokuapp.com/" className="inside-text">Live
                            Site</a>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-8" id="app-4-details">
                <p>Social media app that allows you to connect with friends over Meet-up locations</p>
                <p>Tech Used:</p>
                <p>HTML5, React, React-Carousel, CSS3, JSON</p>
            </div>

        </div>

        <br/>
        <br/>

        

        <br/>
        <br/>
        <br/>

    </div>
    </>
    )

};

export default Portfolio;
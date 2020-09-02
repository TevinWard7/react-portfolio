import React, {useEffect} from "react";
import "./portfolio.css";
import burgerImg from "./img/burger.png";
import weatherImg from "./img/weather.png";
// import fancyTextImg from "./img/fancy-text.png";
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
                <p>Like burgers? Make a list of some you want to eat and keep note of wich ones you've devoured</p>
                <p>Tech Used:</p>
                <p>HTML5, CSS3, Javascript, Bootstrap, Express, Handlebars, MySQL</p>
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
                <p>Keep a list of your employees and search them by name.</p>
                <p>Tech Used:</p>
                <p>HTML5, Bootstrap, CSS3, React</p>
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
                <p>Check the weather</p>
                <p>Tech Used:</p>
                <p>HTML5, Bootstrap, CSS3, Javascipt, JQuery</p>
            </div>

        </div>

        <br/>
        <br/>

        {/* <div className="row" id="app-4-container">

            <div className="col-lg-4 col-md-0"></div>

            <div className="col-lg-4 col-md-8">
                <div className="container" id="app-4" >
                    <img src={fancyTextImg} alt="Portfolio Site" width="300" height="300" className="folio-image"
                        id="folio-image-4" ></img>
                    
                    <div className="text" id="text-4" ><a href="https://github.com/TevinWard7/QuoteConvertor.git"
                            className="inside-text">GitHub</a><span class="inside-text"> | </span><a
                            href="https://tevinward7.github.io/QuoteConvertor/" className="inside-text">Live
                            Site</a>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-8" id="app-4-details">
                <p>Write or generate a quote to be generated in a quirky dialect of your choice</p>
                <p>Tech Used:</p>
                <p></p>
            </div>

        </div> */}

        <br/>
        <br/>
        <br/>

    </div>
    </>
    )

};

export default Portfolio;
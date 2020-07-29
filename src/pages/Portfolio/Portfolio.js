import React from "react";
import "./portfolio.css";
import burgerImg from "./img/burger.png";
import weatherImg from "./img/weather.png";
import fancyTextImg from "./img/fancy-text.png";

const Portfolio = () => {

    return(
        <>
    <div class="linksContainer">

        <div className="row">
            <div className="col-12">
                <div className="container" id="app-2">
                    <img src={burgerImg} alt="Portfolio Site" width="300" height="300" className="folio-image"
                        id="folio-image-2"></img>
                  
                    <div className="text" id="text-2"><a href="https://github.com/TevinWard7/Eat-Da-Burger.git"
                            className="inside-text">GitHub</a><span class="inside-text"> | </span><a
                            href="https://eat-da-burger-app-7.herokuapp.com/" className="inside-text">Live
                            Site</a>
                    </div>
                </div>
            </div>
        </div>

        <br/>
        <br/>

        <div className="row">
            <div className="col-12">
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
        </div>

        <br/>
        <br/>

        <div className="row">
            <div className="col-12">
                <div className="container" id="app-4">
                    <img src={fancyTextImg} alt="Portfolio Site" width="300" height="300" className="folio-image"
                        id="folio-image-4"></img>
                    
                    <div className="text" id="text-4"><a href="https://github.com/TevinWard7/QuoteConvertor.git"
                            className="inside-text">GitHub</a><span class="inside-text"> | </span><a
                            href="https://tevinward7.github.io/QuoteConvertor/" className="inside-text">Live
                            Site</a>
                    </div>
                </div>
            </div>
        </div>

        <br/>
        <br/>
        <br/>

    </div>
    </>
    )

};

export default Portfolio;
import React, {useEffect} from "react";
import "./portfolio.css";
import burgerImg from "./img/burger.png";
import recipeImg from "./img/recipebook.png";
import wwcImg from "./img/wwc.png";
import trackerImg from "./img/tracker.gif";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {

    useEffect(() => {
        AOS.init({duration: 1000})
      }, [])

    return(
        <>

            <div className="linksContainer">

                {// Row & App 1
                }
                <div data-aos="flip-left" className="row" id="app-1-container">

                    <div className="col-lg col-md-12">

                        <div className="container" id="app-1">

                            <img src={wwcImg} alt="Portfolio Site" width="300" height="300" className="folio-image"
                                id="folio-image-1" ></img>
                        
                            <div className="text" id="text-1"><a href="https://github.com/TevinWard7/Weather-Clothes"
                                    className="inside-text">GitHub</a><span class="inside-text"> | </span><a
                                    href="https://weatherwearclothes.com/" className="inside-text">Live
                                    Site</a>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg col-md-12">

                        <div id="app-1-details">
                            <p>Created a minimalist web application that takes the effort out of deciding what to wear by allowing users to upload their wardrobe and have outfits automatically determined for them each day according to the local weather</p>
                            <p>Tech Used:</p>
                            <p>React, Firebase, Material-UI, Server-side APIs</p>
                            <hr></hr>
                            <i><p>Email: myapptest777@gmail.com Password: myapptest123</p></i>
                        </div>

                    </div>
         
                </div>

                <br/>
                <br/>

                {// Row & App 2
                }
                <div data-aos="flip-right" className="row" id="app-2-container">

                    <div className="col-lg col-md-12">

                        <div id="app-2">

                            <img src={burgerImg} alt="Burger Site" width="300" height="300" className="folio-image"
                                id="folio-image-2" ></img>
                        
                            <div className="text" id="text-2"><a href="https://github.com/TevinWard7/Eat-Da-Burger.git"
                                    className="inside-text">GitHub</a><span class="inside-text"> | </span><a
                                    href="https://eat-da-burger-app-7.herokuapp.com/" className="inside-text">Live
                                    Site</a>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg col-md-12">

                        <div id="app-2-details">
                            <p>Like burgers? This web based app queries a MySQL database to allow users to create and maintain a list of them that have been eaten or not</p>
                            <p>Tech Used:</p>
                            <p>HTML, CSS, Bootstrap, Javascript, JQuery, Node.js, Express, Handlebars and MySQL</p>
                        </div>

                    </div>

                </div>

                <br/>
                <br/>
                

                {// Row & App 3

                }
                <div data-aos="flip-left" className="row" id="app-3-container">

                    <div className="col-lg col-md-12">

                        <div className="container" id="app-3">
                            <img src={recipeImg} alt="Portfolio Site" width="300" height="300" class="folio-image"
                                id="folio-image-3"></img>
                            
                            <div className="text" id="text-3"><a href="https://github.com/TevinWard7/Recipes-Book"
                                    class="inside-text">GitHub</a><span class="inside-text"> | </span><a
                                    href="https://create-recipe-book.herokuapp.com/login" className="inside-text">Live
                                    Site</a>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg col-md-12">

                        <div id="app-3-details"> 
                            <p>Collaborated on a health conscious app providing users a way to find new recipes based on dietary needs, save favorites to a recipe book and receive step by step cooking instructions</p>
                            <p>Tech Used:</p>
                            <p>AJAX, HTTP GET requests, Express, Node.js</p>
                            <hr></hr>
                            <i><p>Email: myapptest777@gmail.com Password: myapptest123</p></i>
                        </div>
                        
                    </div>

                </div>

                <br/>
                <br/>

                {// Row & App 4

                }
                <div data-aos="flip-right" className="row" id="app-4-container">

                    <div className="col-lg col-md-12">
                        
                        <div className="container" id="app-4">

                            <img src={trackerImg} alt="Portfolio Site" width="300" height="300" class="folio-image"
                                id="folio-image-4"></img>
                            
                            <div className="text" id="text-4"><a href="https://github.com/TevinWard7/employee_tracker"
                                    class="inside-text">GitHub</a>
                                    {/* <span class="inside-text"> | </span><a
                                    href="https://what-happenings.herokuapp.com/" className="inside-text">Live
                                    Site</a> */}
                            </div>

                        </div>

                    </div>

                    <div className="col-lg col-md-12">

                        <div id="app-4-details">
                            <p>Command line application that allows user to keep a record of employees and their given role in a company</p>
                            <p>Tech Used:</p>
                            <p>Javascript, Node.js, Axios, MySQL</p>
                        </div>
                        
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
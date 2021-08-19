import React from "react";
import "./portfolio.css";
import recipeImg from "../../images/recipebook.png";
import wwcImg from "../../images/wwc.png";
import trackerImg from "../../images/tracker.gif";
// import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = () => {

    // useEffect(() => {
    //     AOS.init({duration: 1000})
    //   }, [])

    return(
        <>

            <h2>Projects</h2>

            <div className="linksContainer">

                <br/>
                <br/>
                <br/>
                <br/>

                {// Row & App 1
                }
                <div className="app" id="app-1-container">

                    <div>

                        <div id="app-1">

                            <div>
                            <img src={wwcImg} alt="Portfolio Site" width="300" height="300" className="folio-image"
                                id="folio-image-1" ></img>
                            </div>

                            <br/>
                            <br/>

                            <h2>Weather Wear Clothes</h2>

                        </div>

                    </div>

                    <div className="linkwords">

                        <div id="app-1-details">
                            <p>Minimalist web application that takes effort out of deciding what to wear by allowing you to upload your wardrobe and have outfits automatically chosen for you each day based on local weather</p>
                            {/* <p>Tech Used:</p> */}
                            <p>React, Firebase, Material-UI, Server-side APIs</p>

                            <div class="app-links">
                                <a href="https://github.com/TevinWard7/Weather-Clothes"
                                    >GitHub</a><span > | </span><a
                                    href="https://weatherwearclothes.com/">Live
                                    Site
                                </a>
                            </div>
                            
                            <hr></hr>
                            <i><p>Email: myapptest777@gmail.com Password: myapptest123</p></i>
                        </div>

                    </div>
         
                </div>

                <br/>
                <br/>
                

                {// Row & App 4

                }
                <div className="app" id="app-4-container">

                    <div>
                        
                        <div className="container" id="app-4">

                            <div>
                            <img src={trackerImg} alt="Portfolio Site" width="300" height="300" class="folio-image"
                                id="folio-image-4"></img>
                                </div>
                            
                            <br/>
                            <br/>

                            <h2>Employee Tracker</h2>

                        </div>

                    </div>

                    <div className="linkwords">

                        <div id="app-4-details">
                            <p>Command line app that helps you stay organized by keeping record of employees and their given role in a company</p>
                            {/* <p>Tech Used:</p> */}
                            <p>Javascript, Node.js, Axios, MySQL</p>
                            <div className="app-links">
                                <a href="https://github.com/TevinWard7/employee_tracker"
                                    class="inside-text">GitHub
                                </a>
                            </div>
                        </div>
                        
                    </div>

                </div>

                <br/>
                <br/>
                <br/>
                <br/>

                {// Row & App 3

                }
                <div className="app" id="app-3-container">

                <div>

                    <div className="container" id="app-3">
                        <div>
                        <img src={recipeImg} alt="Portfolio Site" width="300" height="300" class="folio-image"
                            id="folio-image-3"></img>
                            </div>

                            <br/>
                            <br/>

                            <h2>Recipes</h2>
                    </div>

                </div>

                <div className="linkwords">

                    <div id="app-3-details"> 
                        <p>Foodie & health conscious app that gives you power over your diet by making it easy to find new recipes based on dietary needs. Save favorite recipes to a book and even receive step by step cooking instructions</p>
                        {/* <p>Tech Used:</p> */}
                        <p>AJAX, HTTP GET requests, Express, Node.js</p>

                        <div className="app-links">
                            <a href="https://github.com/TevinWard7/Recipes-Book"
                                >GitHub</a><span> | </span><a
                                href="https://create-recipe-book.herokuapp.com/login">Live
                                Site
                            </a>
                        </div>

                        <hr></hr>
                        <i><p>Email: myapptest777@gmail.com Password: myapptest123</p></i>
                    </div>
                    
                </div>

            </div>

                <br/>
                <br/>
                <br/>
                <br/>

            </div>

        </>
    )

};

export default Portfolio;
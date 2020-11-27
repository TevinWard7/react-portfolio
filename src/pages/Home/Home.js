import React, { useState, useEffect } from "react";
import "./home.css";
import anime from 'animejs/lib/anime.es.js';
import logo from "../../components/Nav/img/tevinlogo.png"

const Home = () => {

    const [hello, setHello] = useState();
    const [helloClr, setHelloClr] = useState();

    const myStyle = {
        color: helloClr,
        zIndex: "1"
    };

    useEffect(() => {

        setInterval(displayNewHello, 2000);

        anime({
                targets: '#logo',
                rotate: 360, 
                loop: true,
                easing: 'linear',
                duration: 3000
        });
    
        
        anime({
            targets: '#greeting-display',
            keyframes: [
                {opacity: 0},
                {opacity: 100},
                // {fontSize: 250},
                {opacity: 0},
              ],
            loop: true,
            duration: 20000
        });

    },[]);

    const displayNewHello = () => {

        // Array containing hello
        const helloArray = ["こんにちは", "হ্যালো", "Привет", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ"];

        // Array containing colors 
        const colors = [
            // Rosy brown
            "#C8B0A6",
            // Gainsboro
            "#E4DCE0",
            // Rosy brown
            "#C8B0A6",
            // Gainsboro
            "#E4DCE0",
            // Rosy brown
            "#C8B0A6",
            // Dark sea green
            // "#AFB4A7",
            // Pale goldenrod
            // "#E8CBB1"
        ];

        // Generates randomnumber
        const randomNumber = Math.floor(Math.random() * 4);
        
        setHello(helloArray[randomNumber]);
        setHelloClr(colors[randomNumber]);

    };
    
    return(
        <div className="home">

            <div className="row text-center koi-fish">

                <div className="col">
                    <a href="/"><img id="logo" src={logo} alt="logo" width="100" height="100"/></a>
                    <h1 id="name">Tevin Ward</h1>
                    <p>Full-Stack Developer</p>
                </div>
       
            </div>

            <div className="col-6 greetings">
                <h1 style={myStyle} id="greeting-display" >{hello}</h1>
            </div>

        </div>
    )

};

export default Home;
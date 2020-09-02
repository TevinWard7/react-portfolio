import React, { useState, useEffect } from "react";
import "./home.css";

const Home = () => {

    const [hello, setHello] = useState();
    const [helloClr, setHelloClr] = useState();

    const myStyle = {
        color: helloClr,
        zIndex: '-10'
    };

    useEffect(() => {

        setInterval(displayNewHello, 2000);

      },[]);

    const displayNewHello = () => {

        // Array containing hello
        const helloArray = ["Hello", "こんにちは", "হ্যালো", "Привет", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ"];

        // Array containing colors 
        const colors = [
            // Rosy brown
            "#C8B0A6",
            // Gainsboro
            "#E4DCE0",
            // Dark sea green
            "#AFB4A7",
            // Pale goldenrod
            "#E8CBB1"
        ];

        // Generates randomnumber
        const randomNumber = Math.floor(Math.random() * 5);
        
        setHello(helloArray[randomNumber]);
        setHelloClr(colors[randomNumber]);

    };
    
    return(
        <div class="myContainer home">

           <div class="row text-center middle">

               <div class="col-12">
                 <h1 style={myStyle} id="greeting-display">{hello}</h1>
              </div>

            </div>
        </div>
    )

};

export default Home;
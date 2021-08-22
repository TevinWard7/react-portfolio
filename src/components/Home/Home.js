import React, {  useEffect } from "react";
// import anime from 'animejs/lib/anime.es.js';

const Home = () => {

    useEffect(() => {

        const consoleText = (words, id, colors) => {

          if (colors === undefined) colors = ['#fff'];
          var letterCount = 1;
          var x = 2;
          var waiting = false;
          var target = document.getElementById(id)
          target.setAttribute('style', 'color:' + colors[0])
          
          window.setInterval(function() {
        
            if (letterCount === 1 && waiting === false) {
              waiting = true;
              target.innerHTML = words[0].substring(0, letterCount)
              window.setTimeout(function() {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0]);
                letterCount += x;
                waiting = false;
              }, 1000)
            } 
            else if (letterCount === words[0].length + 1 && waiting === false) {
              waiting = true;
              window.setTimeout(function() {
                x -= 1;
                letterCount += x;
                waiting = false;
              }, 1000)
            } 
            else if (waiting === false) {
              target.innerHTML = words[0].substring(0, letterCount)
              letterCount += x;
            }
          }, 120)
        }

        consoleText(['Software Engineer', 'Software Developer', 'Super guy'], 'text',['white']);

    },[])
    
    return(
        <>
          <div>
                <h1 id="name"><span className="accent">Tevin </span>Ward</h1>
                {/* <hr id="line"/> */}
                <div class='console-container'>
                  <span id='text'></span><div class='console-underscore' id='console'></div>
                </div>
          </div>
        </>
    )

};

export default Home;
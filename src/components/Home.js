import React, {  useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';

const Home = () => {

    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);


    useEffect(() => {

        anime({
                targets: '#logo',
                rotate: 360, 
                loop: true,
                easing: 'linear',
                duration: 3000,
        });

    },[]);
    
    return(
        <>

            <div>
                <h1 id="name"><span className="accent">Tevin </span>Ward</h1>
                {/* <hr id="line"/> */}
                <h6 id="title">Software Engineer</h6>
            </div>

        </>
    )

};

export default Home;
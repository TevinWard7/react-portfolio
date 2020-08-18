import React, {useEffect} from "react";
import anime from 'animejs/lib/anime.es.js';

const Contact = () => {

    useEffect(() => {
        
        anime({
            targets: '.myContainer',
              rotate: {
                value: 360,
                duration: 1000,
                easing: 'easeInOutSine'
              }
          });

    },[])

    return(
        <div class="myContainer">

            <p class="linked-pages-text">tevinward7@gmail.com</p>

        </div>
    )
};

export default Contact;
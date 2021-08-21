import React from "react";
import gitImg from "../images/github.png";
import linkdIMg from "../images/linkedi.png";


const About = () => {

    // const [hello, setHello] = useState("Hello");
    // const [helloClr, setHelloClr] = useState();

    // const myStyle = {
    //     color: helloClr,
    //     zIndex: "1",
    // };

    // useEffect(() => {

    //     setInterval(displayNewHello, 2000);

    // },[]);

    // const displayNewHello = () => {

    //     // Array containing hello
    //     const helloArray = ["こんにちは", "Привет", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "Hello"];

    //     // Array containing colors 
    //     const colors = [
    //         "white",
    //         "#E4DCE0",
    //         "white",
    //         "white",
    //         "pink"
    //     ];

    //     // Generates randomnumber
    //     const randomNumber = Math.floor(Math.random() * 5);
        
    //     setHello(helloArray[randomNumber]);
    //     setHelloClr(colors[randomNumber]);

    // };

    return(
        <>
            <h2>About</h2>
            <br/>

            {/* <div className="greetings">
                <h1 style={myStyle} id="greeting-display" >{hello || "Hello"}</h1>
            </div> */}
            <p>
                Full-stack dev based out of Raliegh, North Carolina passionate about effeciency, DRY semantic code, user freindly applications, and learning new tech!
                <br/>
                <br/>
                Main tech stack:
                <br/>
                MERN MongoDB, Express, React, Node.js.
                JavaScript (ES6),  HTML & CSS
            </p>

            <br/>

            <br/>

            <div>
            <a href="https://github.com/TevinWard7">  <img src={gitImg} alt="github-link" height="30" width="30" />  </a>|
            <a href="https://www.linkedin.com/in/tevin-ward-bb1494150/" >  <img src={linkdIMg} alt="github-link" height="30" width="30" />  </a>
            </div>
                
        </>
    )
};

export default About;
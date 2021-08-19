import React from "react";
import "./form.scss";

const Form = () => {
    return(
        <div className="cbody">

            <h2>Get In Touch</h2>

            <form id="form" class="topBefore">
                    
                    <input id="name" type="text" placeholder="NAME"/>
                    <input id="email" type="text" placeholder="E-MAIL"/>
                    <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
                    <p id="submit" type="submit" value="GO!"><span role="img" aria-label="m">✉️</span></p>
                    {/* <input id="submit" type="submit" value="GO!"/> */}
            
            </form>
        </div>
        )
};

export default Form;
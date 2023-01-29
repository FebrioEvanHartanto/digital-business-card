import React from "react"
import MyPhoto from "../images/IMG_8524 master resize.jpg"
import MailIcon from "../images/Mail.png"
import LinkedInIcon from "../images/linkedin.png"


function Info (){
    return(
        <div className = "info-div">
            <div className = "photo-div">
            <img src = {MyPhoto} alt = "Red-Bg Selfie"></img></div>
            <h1>Febrio Evan Hartanto</h1>
            <h3 className = "pos">Front-End Web Developer</h3>
            <h4>Experience Level : Junior</h4>

            <button className="mail-btn"><img src= {MailIcon} alt = "Mail Icon"></img>Email</button>
            <a href="https://www.linkedin.com/in/febrio-evan-hartanto-977a431b7/" target="_blank" rel="noreferrer noopener"><button className="linkedin-btn"><img src= {LinkedInIcon} alt = "LinkedIn Icon"></img>LinkedIn</button></a>
        </div>
    );
}

export default Info;
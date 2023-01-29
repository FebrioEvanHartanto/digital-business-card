import React from "react"
import TwitterLogo from "../images/Twitter Icon.png"
import FacebookLogo from "../images/Facebook Icon.png"
import InstaLogo from "../images/Instagram Icon.png"
import GithubLogo from "../images/GitHub Icon.png"
function Footer(){
    return(
        <footer>
            <img src = {TwitterLogo} alt="Twitter Icon"></img>
            <img src = {FacebookLogo} alt="Facebook Icon"></img>
            <img src = {InstaLogo} alt="Instagram Icon"></img>
            <img src = {GithubLogo} alt="Github Icon"></img>
        </footer>
    );
}

export default Footer;
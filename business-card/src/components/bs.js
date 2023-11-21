import React from "react";
import header_pic from "./images/me.jpeg"
import fb from "./images/fb.png"
import github from "./images/github.png"
import linkedin from "./images/linkedin.png"
import x from "./images/x.png"
import "./bs.css"


export default function Main(){
    return (
        <div className="container">
         <header className="bs-top">
            <img className="header-image" src={header_pic} alt="me" />
            <h3>Alex Njuguna</h3>
            <h5>Software Engineer</h5>
         </header>

         <div className="button-list">
            <button className="email-btn">Email</button>
            <button className="linkedin-btn">Linkedin</button>
         </div>

         <main className="main-content">
            <h2>About & Interests</h2>
            <p>
                Passionate software engineer with a 
                keen interest in web app development. 
                Focused on creating powerful and
                efficient solutions.
            </p>
         </main>

         <footer className="footer-content">
            <img src={fb} alt="" />
            <img src={linkedin} alt="" />
            <img src={github} alt="" />
            <img src={x} alt="" />
         </footer>
        </div>
       
    )
}
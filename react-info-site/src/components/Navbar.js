import React from "react"
import "./Navbar.css"
import logo from "./logo.svg"


export default function Navbar(){
    return (
       <div className="nav">
        <div className="nav-logo">
            <img src={logo}  width="80px" alt="logo" />
            <h2>ReactFacts</h2>
        </div>
            

            <h4>ReactCourse - Project 1</h4>
       </div>
    )
}


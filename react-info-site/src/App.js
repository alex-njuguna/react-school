// import logo from './logo.svg';
import React from "react"
import './App.css';
import Header from "./Header"


function Footer(){
  return (
    <footer className="page-footer">
        &copy; 2023 alex njuguna. All rights reserved  
    </footer>
  )
}

function MainContent(){
  return (
    <div className="main-content">
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>It's a popular library</li>
        <li>Improve my tech stack</li>
        <li>It's a hireble skill</li>
      </ol>
    </div>
  )
}


function App() {
  return(
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
    
}

export default App;

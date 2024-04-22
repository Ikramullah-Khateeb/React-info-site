import React from "react"
import "../index.css"
function Navbar() {
   return( 
    <nav>
        <img src={require("../Images/React logo.png")}  />
        <h3>ReactFacts</h3>
        <h4>React Course-Project 1</h4>
    </nav>
   )
}

export default Navbar
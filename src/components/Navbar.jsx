import { Link } from "react-router-dom";

// import React from 'react'
// import "./Navbar.css";

// Logo should be a svg file
// https://www.freecodecamp.org/news/use-svg-images-in-css-html/
import logo from "../images/logo_paddlexplorer.svg";




function Navbar() {
    return (
        <div className="flex justify-between">

            {/* Link to router pages */}
            {/* <img src={logo} alt="" /> */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/tours">Tours</Link>
            <Link to="/faq">FAQs</Link>
        </div>
    )
}

export default Navbar
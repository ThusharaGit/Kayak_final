import { Link } from "react-router-dom";

// import React from 'react'
// import "./Navbar.css";

// Logo should be a svg file
// https://www.freecodecamp.org/news/use-svg-images-in-css-html/
import logo from "../images/logo_paddlexplorer.svg";
import hamburger from "../images/hamburger.svg";

function Navbar() {




  return (
    <div className="text-main-text-dark flex justify-start items-center  bg-main-text-light px-8 py-4">
      <div className="w-full sm:w-auto flex justify-between items-center ">
        <Link to="/">
          <img src={logo} alt="Logo" className="max-h-10" />
        </Link>
        <img src={hamburger} alt="hamburger" className="sm:hidden" />
      </div>

      {/* Link to router pages */}
      <div className="hidden sm:flex ml-4 space-x-4">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/tours">TOURS</Link>
        <Link to="/faq">FAQs</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  );
}

export default Navbar;

import { Link } from "react-router-dom";

import React, { useState } from "react";
// import "./Navbar.css";

// Logo should be a svg file
// https://www.freecodecamp.org/news/use-svg-images-in-css-html/
import logo from "../images/logo_paddlexplorer.svg";
import hamburger from "../images/hamburger.svg";

function Navbar() {
  // for mobile hamburger menue
  const [isShown, setIsShown] = useState(false);
  const [navcolor, setNavcolor] = useState(false);

  const changenavcolor = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 50) {
      setNavcolor(true);
    } else {
      setNavcolor(false);
    }
  };
  window.addEventListener("scroll", changenavcolor);

  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  // Define MobileMenu component
  const MobileMenu = () => {
    return (
      <nav
        className={
          "flex flex-col justify-between items-center space-y-4 bg-main-text-light z-50 ring-2 ring-red"
        }
      >
        <img src={logo} alt="Logo" />

        <button className="size-12" onClick={toggleMobileMenu}>
          X{/* &times; */}
        </button>

        {/* Link to router pages */}
        <Link to="/" onClick={toggleMobileMenu}>
          HOME
        </Link>
        <Link to="/about" onClick={toggleMobileMenu}>
          ABOUT
        </Link>
        <Link to="/tours" onClick={toggleMobileMenu}>
          TOURS
        </Link>
        <Link to="/faq" onClick={toggleMobileMenu}>
          FAQs
        </Link>
        <Link to="/contact" onClick={toggleMobileMenu}>
          CONTACT
        </Link>
      </nav>
    );
  };

  return (
    <>
      {/* ternary operator according navcolor useState */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 text-main-text-dark flex justify-start items-center px-6 py-4 ${
          navcolor ? "bg-main-text-dark opacity-90" : "main-text-light"
        }`}
      >
        {/* regular menu in mobile with Logo and Hamburger*/}
        <div className="w-full sm:w-auto flex justify-between items-center ">
          <Link to="/">
            <img src={logo} alt="Logo" className="max-h-10 sm:max-h-12" />
          </Link>

          <img
            onClick={toggleMobileMenu}
            src={hamburger}
            alt="hamburger"
            className="sm:hidden"
          />
        </div>

        {/* redering the mobile menu and the close button */}

        {/* Link to router pages */}
        {/* menu in non-mobile sm:text-xl ?*/}
        <div className="hidden sm:flex ml-4 space-x-4 text-main-text-dark">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/tours">TOURS</Link>
          <Link to="/faq">FAQs</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
      {isShown && <MobileMenu />}
    </>
  );
}

export default Navbar;

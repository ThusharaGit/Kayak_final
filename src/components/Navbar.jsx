import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
// import "./Navbar.css";
import BlackButton from "./general/BlackButton";

// Logo should be a svg file
// https://www.freecodecamp.org/news/use-svg-images-in-css-html/
import logo from "../images/logo_paddlexplorer.svg";
import hamburger from "../images/hamburger.svg";
import hamburger_close from "../images/hamburger_close.svg";

function Navbar() {
  const { pathname } = useLocation();
  console.log(pathname);

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
          "fixed inset-0 z-50 flex px-6 py-4 opacity-95 flex-col  items-center space-y-4 bg-main-text-light transition-opacity duration-300 ease-in-out"
        }
      >
        <div className="w-full flex justify-between items-center ">
          <Link to="/">
            <img src={logo} alt="Logo" className="max-h-10 sm:max-h-12" />
          </Link>

          <img
            onClick={toggleMobileMenu}
            src={hamburger_close}
            alt="hamburger"
            className=""
          />
        </div>

        {/* Link to router pages */}
        <div className="pt-32 flex flex-col items-center text-xl space-y-8">
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
          <Link
            to="/contact"
            onClick={toggleMobileMenu}
            className="      
            w-[180px] h-[56px]
            flex items-center justify-center
            bg-main-text-dark
            rounded-[25px]
            shadow-[1px_1px_3px_rgba(0,0,0,0.6)]
            text-main-text-light text-[18px]  uppercase font-niramit        
          "
          >
            CONTACT
          </Link>
        </div>
      </nav>
    );
  };

  return (
    <>
      {/* ternary operator according navcolor useState */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 text-main-text-dark flex justify-start items-center px-6 py-4 ${
          navcolor ? "bg-main-text-dark opacity-95" : "bg-main-text-light"
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
        {/* menu in non-mobile sm:text-xl ?*/}
        <div
          className={`hidden sm:flex ml-4 space-x-4 text-main-text-dark ${
            navcolor ? "text-main-text-light" : "tex-main-text-dark"
          }`}
        >
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/tours">TOURS</Link>
          <Link to="/faq">FAQs</Link>
          <Link
            to="/contact"
            // className={`${pathname === "/contact" ? "text-blue" : ""}`}
          >
            CONTACT
          </Link>

          {/* <div>
            {pathname === "/contact" ? (
              <BlackButton text="CONTACT" link="/contact" />
            ) : (
              <Link
                to="/contact"
                // className={`${pathname === "/contact" ? "text-blue" : ""}`}
              >
                CONTACT
              </Link>
            )}
          </div> */}
        </div>
      </div>
      {isShown && <MobileMenu />}
    </>
  );
}

export default Navbar;

import React from "react";
import { useState, useEffect } from "react";

import IconTop from "../../images/ScrollUpArrow.svg";

function ScrollButton() {
  // The back-to-top button is hidden at the beginning
  const [showUpButton, setShowUpButton] = useState(false);

  //   check when to make button visible
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowUpButton(true);
      } else {
        setShowUpButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showUpButton && (
        <button
          onClick={scrollToTop}
          className="fixed z-[99] bottom-16 right-6 bg-transparent cursor-pointer border-none"
        >
          <img src={IconTop} alt="ScrollTop" />
        </button>
      )}
    </>
  );
}

export default ScrollButton;

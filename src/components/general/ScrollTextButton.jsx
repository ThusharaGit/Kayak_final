import React from "react";

import right_button from "../../images/ScrollUpArrow.svg";

const ScrollTextButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="flex items-center bg-transparent p-4"
    >
      <span className="text-main-text-dark font-semibold text-xl sm:text-lg mr-2.5 ">
        Return to the top
      </span>
      <img src={right_button} alt="arrow-right" />
    </button>
  );
};

export default ScrollTextButton;

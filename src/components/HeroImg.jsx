// import React from 'react'

import hero_banner from "../images/hero-banner.svg";
import hero_image_m from "../images/hero-image-rounded.svg";
import hero_border from "../images/hero-border.svg";
import hero_image_l from "../images/hero-image.svg";
import hero_image from "../images/hero-image-border.jpg";

function HeroImg() {
  return (
    <>
      {/* mobile view */}
      <div className="sm:hidden relative flex flex-col items-center justify-center h-[700px]">
        <img
          src={hero_banner}
          alt=""
          className="absolute inset-0 object-cover w-full h-full"
        />
        <img src={hero_image_m} alt="" className="abolute w-4/5" />
      </div>

      {/* tablet/pc view */}
      <div className="hidden sm:block relative  max-h-[700px] ring-2 ring-red">
        {/* <img src={hero_border} alt="" className="abolute  bottom-0 inset-0 object-cover " /> */}
        {/* <img src={hero_image_l} alt="" className="abolute  bottom-0 inset-0 object-cover " /> */}
      <img src={hero_image} alt="" className="abolute inset-0 object-cover" />
      </div>
    </>
  );
}

export default HeroImg;

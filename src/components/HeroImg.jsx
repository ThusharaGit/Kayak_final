// import React from 'react'

import hero_banner from "../images/hero-banner.svg";
import hero_image_m from "../images/hero-image-rounded.svg";
import hero_border from "../images/hero-border.svg";
import hero_image_l from "../images/hero-image.svg";
import hero_image from "../images/hero-image-border.jpg";

import GradientText from "./general/GradientText";
import GradientButton from "./general/GradientButton";

function HeroImg() {
  return (
    <>
      {/* mobile view */}
      <div className="sm:hidden relative w-full h-[700px] flex flex-col items-center justify-center">
        <img
          src={hero_banner}
          alt="Big SVG"
          className="absolute inset-0 object-cover w-full h-full"
        />

        <div className="absolute flex flex-col items-center w-4/5 space-y-6  z-10">
          <GradientText text="Empowering" />
          <GradientText text="Youth" />

          <p className=" text-xl">… one paddle at a time!</p>

          <img src={hero_image_m} alt="Small SVG" className="" />

          <div className="pt-4">
            <GradientButton text="Book a trip" route="/tours" />
          </div>
        </div>
      </div>

      {/* tablet/pc view */}
      <div className="bg-main-text-light hidden sm:block relative  h-[700px] ring-2 ring-red">
        {/* <img src={hero_border} alt="" className="absolute  bottom-0 right-0 h-full" />
        <img src={hero_image_l} alt="" className="absolute  bottom-0 right-0 h-full z-10" /> */}
        <img
          src={hero_image}
          alt=""
          className="absolute bottom-0  right-0  h-full"
        />
      </div>

      {/* <div className="sm:hidden flex justify-center">
        <GradientButton text="Book a trip" route="/tours" />
      </div> */}
    </>
  );
}

export default HeroImg;

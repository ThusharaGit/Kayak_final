// import React from 'react'

import hero_banner from "../images/hero-banner.svg";
import hero_image_m from "../images/hero-image-rounded.svg";
import hero_border from "../images/hero-border.svg";
import hero_image_l from "../images/hero-image.svg";
import hero_image from "../images/hero-image-border.jpg";
import empowering_youth from "../images/empowering_youth.svg";

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
          {/* <GradientText text="Empowering" />
          <GradientText text="Youth" /> */}

          <img src={empowering_youth} alt="" className="  " />

          <p className=" text-xl">… one paddle at a time!</p>

          <img src={hero_image_m} alt="Small SVG" className="" />

          <div className="pt-4">
            <GradientButton text="Book a trip" route="/tours" />
          </div>
        </div>
      </div>

      {/* tablet/pc view */}
      <div className="relative bg-main-text-light hidden sm:block h-[700px]">
        
        <div className="absolute z-10 lg:top-32 top-4 lg:left-24 left-10 space-y-10 ring-2 ring-blue">
          <img src={empowering_youth} alt="" className=" " />

          <p className=" text-3xl  ">
            … one paddle at a time!
          </p>
          <div className="">
            <GradientButton text="Book a trip" route="/tours" />
          </div>

        </div>

        <img
          src={hero_image}
          alt=""
          className="absolute bottom-0  right-0  h-full object-cover"
          />

          {/* <img src={hero_border} alt="" className="absolute  bottom-0 right-0 h-full" />
          <img src={hero_image_l} alt="" className="absolute  bottom-0 right-0 h-full z-10" /> */}
      
      </div>
    </>
  );
}

export default HeroImg;

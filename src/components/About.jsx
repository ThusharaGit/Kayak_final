// import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ScrollButton from "./general/ScrollButton";
import GradientCircle from "./general/GradientCircle";
import abouthero from "../images/about-hero.svg";
import aboutteam from "../images/about-team.svg";

function About() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="mt-16 bg-bg-color flex flex-col items-center space-y-12">
      <ScrollButton />

      <img className="w-full" src={abouthero} alt="" />

      <div className="w-4/5 flex flex-col-reverse md:flex-row items-center gap-10 ring-2 ring-red">
        <div>
          <h1>“Lorem ipsum dolor sit amet, consectetur elit!’’</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ut aliquip ex ea commodo
            consequat. Excepteur sint occaecat cupidatat, id est laborum.
          </p>
        </div>

        <img src={aboutteam} alt="" className="w-full md:h-auto"/>
      </div>

      <div className="flex justify-between items-center p-8">
        <GradientCircle size="small" text1="6" text2="years" />
        <GradientCircle size="big" text1="23" text2="trips" />
        <GradientCircle size="small" text1="72" text2="children" />
      </div>
    </div>
  );
}

export default About;

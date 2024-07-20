// import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ScrollButton from "./general/ScrollButton";
import GradientCircle from "./general/GradientCircle";
import abouthero from "../images/about-hero.svg";

function About() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className="mt-16">
      <ScrollButton />

      <h1>About us</h1>
      <img className="w-full" src={abouthero} alt="" />
      <div className="flex justify-between items-center p-8">
        <GradientCircle size="small" text1="6" text2="years" />
        <GradientCircle size="big" text1="23" text2="trips" />
        <GradientCircle size="small" text1="72" text2="children" />
      </div>
    </div>
  );
}

export default About;

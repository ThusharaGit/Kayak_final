// import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ScrollButton from "./general/ScrollButton";
import ScrollTextButton from "./general/ScrollTextButton";
import GradientCircle from "./general/GradientCircle";

import SliderTeam from "./SliderTeam";

import abouthero from "../images/about-hero.webp";
import aboutteam from "../images/about-team.svg";
import aboutpokal from "../images/about-pokal.svg";
import aboutpaddler from "../images/about-paddler.svg";
import aboutgroup from "../images/about-group.svg";
import aboutpartnerlogo from "../images/about-partner-logo.svg";

// import database with all tables
import data from "../data/db.json";

function About() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // parse data from db.json file
  const team_member = data.team_member;

  return (
    <div className="mt-16 bg-bg-color flex flex-col items-center space-y-12">
      <ScrollButton />

      <img className="w-full" src={abouthero} alt="" />

      {/* ############################## TEAM ###########################*/}
      <div className="px-4 flex flex-col-reverse md:flex-row items-center gap-10 ">
        <div>
          <h1>“Lorem ipsum dolor sit amet, consectetur elit!’’</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ut aliquip ex ea commodo
            consequat. Excepteur sint occaecat cupidatat, id est laborum.
          </p>
        </div>

        <img src={aboutteam} alt="" className="w-full md:h-auto" />
      </div>

      {/* ############################## EXPERIENCE ###########################*/}
      <div className="flex flex-col items-center gap-5">
        <img src={aboutpokal} alt="" />
        <h1 className="text-2xl">Our Experience</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit quis nostrud
          exercitation:{" "}
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          <GradientCircle size="small" text1="6" text2="years" />
          <GradientCircle size="big" text1="23" text2="trips" />
          <GradientCircle size="small" text1="72" text2="children" />
        </div>

        <img src={aboutpaddler} alt="" />
      </div>

      {/* ############################## MEET TEAM ###########################*/}

      <div className="px-4 flex flex-col items-center gap-5">
        <h1 className="text-2xl">Meet our Team</h1>

        <SliderTeam team_member={team_member} />
      </div>
      {/* ############################## PARTNER ###########################*/}

      <div className="flex flex-col items-center gap-5 text-center">
        <img src={aboutgroup} alt="" />
        <h1 className="text-2xl">OUR PARTNERS</h1>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ex ea commodo consequat.
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
          

        {/* container of 2 partner cards */}
        <div className="flex flex-col items-center gap-5">
          {/* a partner card */}
          <div className="flex flex-col items-center">
            <img src={aboutpartnerlogo} alt="" />
            <h1 className="text-2xl">Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor et dolore magna aliqua.{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          {/* a partner card */}
          <div className="flex flex-col items-center">
            <img src={aboutpartnerlogo} alt="" />
            <h1 className="text-2xl">Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor et dolore magna aliqua.{" "}
            </p>
          </div>
        </div>

        </div>
        {/* yellow text box */}
        <div className="w-2/3 mx-auto p-4 text-xl text-center rounded-lg flex flex-col items-center space-y-4 bg-gradient-to-b from-[#F4FFD5] to-[#FAEBA0]">
          <p>
            Would you like to become a part of an exciting project on growing a
            healthy and active young generation? Contact us for more details.
          </p>
        </div>

        <ScrollTextButton />
      </div>
    </div>
  );
}

export default About;

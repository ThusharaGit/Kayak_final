// import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import missionpic from "../images/mission_pic.svg";
import missionbg from "../images/mission_bg.svg";
import contact_pic from "../images/contact_pic.jpg";


import HeroImg from "./HeroImg";
import SliderComments from "./SliderComments";
import ContactCard from "./ContactCard";
import ScrollButton from "./general/ScrollButton";
import MoreButton from "./general/MoreButton";

import { benefitCards } from "../data/data.js";
import data from "../data/db.json";

function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // parse data from db.json file
  const comments = data.comments;
//   console.log(comments);

  return (
    <div className="mt-16 bg-bg-color">
      <ScrollButton />

      <HeroImg />

      {/* ################################################## MISSION ############################### */}
      <div className="m-4 ring-2 ring-green ">
        <div className=" flex flex-col sm:flex-row justify-center items-center text-center px-8 space-y-4">
          {/* for mobile mode */}
          <h1 className="font-niramit text-3xl sm:hidden">OUR MISSION</h1>

          <div className="relative w-2/3 sm:w-1/3">
            <img
              src={missionpic}
              alt="mission_pic"
              className="relative inset-0 object-cover w-full h-full z-10"
            />
            <img
              src={missionbg}
              alt="mission_bg"
              className="absolute -bottom-4 left-6 w-full z-0 "
            />
          </div>

          <div className="sm:w-2/3">
            {/* for tablet / pc mode */}
            <h1 className="font-niramit text-4xl hidden sm:block">
              Our Mission
            </h1>

            <div className="p-4 sm:p-8 space-y-4 text-lg sm:text-lg">
              <p className="font-niramit niramit-regular">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                dolore quibusdam, facilis totam perferendis rem voluptas, omnis
                consequuntur iure eligendi deserunt nemo dicta iusto aliquam a
                fugiat consequatur delectus. Velit perferendis expedita sunt
                quidem ullam itaque sapiente, ut quis odio unde temporibus et
                incidunt sit iste dolorem culpa eveniet rem.
              </p>
              <p className="font-niramit niramit-regular">
                About our instructor Livio....
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ################################################## TRIPS SPECIAL ############################### */}
      {/* <div className="sm:hidden ">
                <h1>here comes the slider for trips special</h1>
            </div> */}

      <div className="m-4 flex  flex-col justify-center ">
        {/* <div className="hidden sm:block"> */}
        <h1 className="font-roboto text-3xl sm:text-4xl text-center">
          WHAT MAKES TRIPS SPECIAL
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  ring-2 ring-blue">
          {benefitCards.map((card, index) => (
            <div
              key={index}
              className="ring-2 ring-blue mx-auto flex flex-col w-64 justify-between items-center p-4 text-center"
            >
              <img className="w-56" src={card.icon} alt={`icon${index + 1}`} />
              <h2 className="text-2xl ">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* ################################################## PREVIOUS TRIPS ############################### */}
      <div className="m-4 ring-2 ring-green ">
        <h1 className="font-roboto text-3xl sm:text-4xl text-center">
          OUR PREVIOUS TRIPS
        </h1>
        <h1>here comes a CAROUSELL</h1>

        <div className="w-full flex justify-center">
          <MoreButton text={"More trips"} route="/tours" />
        </div>
      </div>

      {/* ################################################## WHAT PARENTS SAY ############################### */}
      <div className="m-4 flex flex-col lg:flex-row ring-2 ring-green ">
        {/* text titel */}
        <div className="w-full ring-2 ring-red">
          <h1 className="font-roboto text-3xl sm:text-4xl text-center">
            WHAT PARENTS SAY
          </h1>
          <h1 className="font-roboto text-3xl sm:text-4xl text-center">
            ABOUT OUR PROJECT:
          </h1>
        </div>

        {/* caroussel comments */}
        <SliderComments comments={comments} />
      </div>
      {/* ################################################## NEW TRIPS ############################### */}
      <div className="m-4 ring-2 ring-green text-center">
        <h1 className="font-roboto text-3xl sm:text-4xl">
          NEW TRIPS ARE COMING
        </h1>
        <p>Ready to embark on an unforgettable adventure?</p>
        <p>
          Contact us today to book your child's spot on our next kayaking
          journey.
        </p>
      </div>

      {/* ################################################## CONTACT ############################### */}
      <ContactCard contact_pic={contact_pic} />
    </div>
  );
}

export default Home;

// import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ScrollButton from "./general/ScrollButton";
import ScrollTextButton from "./general/ScrollTextButton";
import GradientButton from "./general/GradientButton";
import GradientCircleIcon from "./general/GradientCircleIcon";

import data from "../data/db.json";
import Calendar from "./Calendar";

import tourshero from "../images/tours-hero.svg";
import icon1 from "../images/tours-rafting.svg";
import icon2 from "../images/tours-compare-heights.svg";
import icon3 from "../images/tours-sand-timer.svg";

function Tours() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // parse data from db.json file
  const tours = data.trips_done;
  console.log(tours);

  return (
    <div className="mt-16 bg-bg-color flex flex-col items-center space-y-12">
      <img className="w-full" src={tourshero} alt="" />
      <ScrollButton />

      <h1 className="w-full px-8 py-8 text-2xl text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed incididunt.
        Ut enim ad minim veniam!{" "}
      </h1>

      <div className="w-2/3 mx-auto p-4 text-xl text-center rounded-lg flex flex-col items-center space-y-4 bg-gradient-to-b from-[#BFFFB5] to-[#FFF9BF]">
        <h1>NEW TRIPS ARE STARTING IN MARCH!</h1>

        <p>
          Check the schedule of our upcoming trips and make sure to book a spot
          there!
        </p>

        <p>For more details contact us here:</p>

        <div className="flex ">
          <span className="bg-banner-yellow h-10 w-10">9</span>
          <p>- dates of our next trips which you can choose from</p>
        </div>
      </div>

      {/* ############### Calendar #################  */}
      <Calendar />
      <GradientButton text="Book a trip" route="/contact" />

      {/* ############### Tour pictures #################  */}
      {tours.map((tour) => (
        <div
          key={tour.trip_id}
          className="flex flex-col sm:flex-row justify-center items-center text-center px-8 space-y-4"
        >
          <div className="w-1/5">
            <img src={tour.trip_URL} alt={tour.trip_title} />
          </div>
          <div className="w-4/5 sm:pl-8">
            <h2 className="text-xl font-bold">{tour.trip_title}</h2>

            <p>Date: {tour.trip_date}</p>
          </div>
        </div>
      ))}

      {/* ############### Tour Details #################  */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
        <GradientCircleIcon icon={icon1} text1="Difficulty" text2="3/10" />
        <GradientCircleIcon icon={icon2} text1="Age" text2="7-10 years" />
        <GradientCircleIcon icon={icon3} text1="Duration" text2="4 hours" />        
      </div>

      <ScrollTextButton />
    </div>
  );
}

export default Tours;

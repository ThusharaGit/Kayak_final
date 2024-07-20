// import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ScrollButton from "./general/ScrollButton";
import ScrollTextButton from "./general/ScrollTextButton";
import GradientButton from "./general/GradientButton";

import data from "../data/db.json";
import Calendar from "./Calendar";

import tourshero from "../images/tours-hero.svg";

function Tours() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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

      <h1>Tours upcoming</h1>

      <ScrollTextButton />
    </div>
  );
}

export default Tours;

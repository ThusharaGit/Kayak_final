// import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ScrollButton from "./general/ScrollButton";
import ScrollTextButton from "./general/ScrollTextButton";

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

      <ScrollButton />
      
  
      <img className="w-full" src={tourshero} alt="" />
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
      <Calendar />



      <ScrollTextButton />
    </div>
  );
}

export default Tours;

import React, { useState } from "react";

import button_back_slide from "../images/button_back_slide.svg";
import button_next_slide from "../images/button_next_slide.svg";

function SliderTours({ trips_done }) {
  // show the card with this index
  const [currentIndex, setCurrentIndex] = useState(0);

  // move to the next card
  // if we are at the end, go to the first card
  const next = () => {
    setCurrentIndex((currentIndex + 1) % trips_done.length);
  };

  // move to the previous card
  // if we are at the beginning, go to the last card
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + trips_done.length) % trips_done.length);
  };

  return (
    <div className="w-full p-4 rounded-[25px] bg-main-text-light shadow">
      {trips_done &&
        trips_done.map((trip) => (
          <div
            key={trip.trip_id}
            className={`flex flex-col justify-center items-center p-4 space-y-2
                ${
                  trips_done[currentIndex].trip_id === trip.trip_id
                    ? "opacity-100 transition-opacity duration-300 ease-in-out"
                    : "hidden opacity-0 transition-opacity duration-300 ease-in-out"
                }
              `}
          >
            <img src={trip.trip_URL} alt="" />

            <div className=" w-full px-4 flex justify-between items-center text-center">
              {/* Previous button */}
              <button onClick={prev} className="w-8">
                <img src={button_back_slide} alt="" />
              </button>

              {/* title of picture and date of trip*/}
              <div>
                <p className="text-xl">{trip.trip_title}</p>
                <p>{trip.trip_date}</p>
              </div>

              {/* Next button */}
              <button onClick={next} className="w-8">
              <img src={button_next_slide} alt="" />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default SliderTours;

// import React from 'react'

import data from "../data/db.json";

function Tours() {
  const tours = data.trips_done;
  console.log(tours);

  return (
    <div>
      <h1>Tours done</h1>
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
    </div>
  );
}

export default Tours;

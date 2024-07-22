import React, { useState } from "react";

import button_back_slide from "../images/button_back_slide.svg";
import button_next_slide from "../images/button_next_slide.svg";

function SliderTeam({ team_member }) {
  // show the card with this index
  const [currentIndex, setCurrentIndex] = useState(0);

  // move to the next card
  // if we are at the end, go to the first card
  const next = () => {
    setCurrentIndex((currentIndex + 1) % team_member.length);
  };

  // move to the previous card
  // if we are at the beginning, go to the last card
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + team_member.length) % team_member.length);
  };

  return (
    <div className="w-full lg:w-2/3 p-4 rounded-[25px] bg-main-text-light shadow">

      

      {team_member &&
        team_member.map((member) => (
          <div
            key={member.team_id}
            className={`flex flex-col justify-center items-center p-4 space-y-2
                ${
                  team_member[currentIndex].team_id === member.team_id
                    ? "opacity-100 transition-opacity duration-300 ease-in-out"
                    : "hidden opacity-0 transition-opacity duration-300 ease-in-out"
                }
              `}
          >
            <img src={member.team_URL} alt="" />

            <div className=" w-full px-4 flex justify-between items-center text-center">
              {/* Previous button */}
              <button onClick={prev} className="w-8">
                <img src={button_back_slide} alt="" />
              </button>

              {/* info of team member*/}
              <div>
                <p className="text-xl">{member.team_name}</p>
                <p>{member.team_title}</p>
              </div>

              {/* Next button */}
              <button onClick={next} className="w-8">
                <img src={button_next_slide} alt="" />
              </button>
            </div>
                <p className="text-left">{member.team_desc}</p>
          </div>
        ))}
    </div>
  );
}

export default SliderTeam;

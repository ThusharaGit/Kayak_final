// import React from 'react'
import missionpic from "../images/mission_pic.svg";
import missionbg from "../images/mission_bg.svg";
import Contact from "./Contact.jsx";


import HeroImg from "./HeroImg"

import { benefitCards } from '../data/data.js';

function Home() {
    return (
        <div className=" bg-bg-color ring-2 ring-green">

            <HeroImg />

            {/* ################################################## MISSION ############################### */}
            <div className="m-4 ring-2 ring-green ">
                <div className=" flex flex-col sm:flex-row justify-center items-center text-center px-8 space-y-4">
                    {/* for mobile mode */}
                    <h1 className="font-niramit text-3xl sm:hidden">Our Mission</h1>

                    <div className="relative  ring-red ring-2 ">
                       
                        <img src={missionpic} alt="mission_pic" className=" scale-125 z-10"/>
                        <img src={missionbg} alt="mission_bg" className="absolute -bottom-1 left-8 scale-150"/>
                    </div>

                    <div>
                        {/* for tablet / pc mode */}
                        <h1 className="font-niramit text-4xl hidden sm:block">Our Mission</h1>

                        <div className="py-4 space-y-4 sm:text-2xl">
                            <p className="font-niramit niramit-regular">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                                dolore quibusdam, facilis totam perferendis rem voluptas, omnis
                                consequuntur iure eligendi deserunt nemo dicta iusto aliquam a
                                fugiat consequatur delectus. Velit perferendis expedita sunt quidem
                                ullam itaque sapiente, ut quis odio unde temporibus et incidunt sit
                                iste dolorem culpa eveniet rem.
                            </p>
                            <p className="font-niramit niramit-regular">About our instructor Livio....</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* ################################################## TRIPS SPECIAL ############################### */}
            <div className="sm:hidden ">
                <h1>here comes the slider for trips special</h1>
            </div>



            <div className="hidden sm:block">
                <h1 className="font-roboto text-3xl sm:text-4xl text-center">What makes our trips special</h1>

                {/* <div className="ring-2 ring-blue-700"> */}

                <div className="flex justify-between gap-20 ring-2 ring-blue-700">
                    {benefitCards.map((card, index) => (
                        <div key={index} className="flex flex-col  justify-between items-center p-4 ring-2 ring-red-700">
                            <img className="w-56" src={card.icon} alt={`icon${index + 1}`} />
                            <h2 className="text-2xl">{card.title}</h2>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>


            </div>

            {/* ################################################## CONTACT ############################### */}

            <Contact />



        </div>
    )
}

export default Home
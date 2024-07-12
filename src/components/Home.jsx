// import React from 'react'
import mission1 from "../images/mission1.svg";
import ContactInput from "./ContactInput.jsx";
// import mission2 from "../images/mission2.png";

// import icon1 from "../images/icon1.svg";
// import icon2 from "../images/icon2.svg";
// import icon3 from "../images/icon3.svg";
// import icon4 from "../images/icon4.svg";

import HeroImg from "./HeroImg"

import { benefitCards } from '../data/data.js';

function Home() {
    return (
        <div className="m-4 ring-2 ring-green-700">

            <HeroImg />

            {/* ################################################## MISSION ############################### */}
            <div className=" ring-2 ring-red-700 ">
                <div className=" flex flex-col sm:flex-row justify-center items-center text-center px-8 space-y-4">
                    {/* for mobile mode */}
                    <h1 className="font-roboto text-3xl sm:hidden">Our Mission</h1>

                    <div className="w-2/5">
                        {/* <img src={mission2} alt="mission2" /> */}
                        <img src={mission1} alt="mission1" />
                    </div>

                    <div>
                        {/* for tablet / pc mode */}
                        <h1 className="font-roboto text-4xl hidden sm:block">Our Mission</h1>

                        <div className="py-4 space-y-4 sm:text-2xl">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                                dolore quibusdam, facilis totam perferendis rem voluptas, omnis
                                consequuntur iure eligendi deserunt nemo dicta iusto aliquam a
                                fugiat consequatur delectus. Velit perferendis expedita sunt quidem
                                ullam itaque sapiente, ut quis odio unde temporibus et incidunt sit
                                iste dolorem culpa eveniet rem.
                            </p>
                            <p className="">About our instructor Livio....</p>
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

                {/* <div className="home-benefit-card">
                        <img src={icon1} alt="icon1" />
                        <div className="home-benefit-icon"></div>
                        <h2>Friendship</h2>
                        <p>
                            Shared adventures foster lasting bonds and create unforgettable
                            memories
                        </p>
                    </div>
                    <div className="home-benefit-card">
                        <img src={icon2} alt="icon2" />
                        <div className="home-benefit-icon"></div>
                        <h2>Nature</h2>
                        <p>
                            An immersive outdoor experience that fosters a deep appreciation
                            for the environment
                        </p>
                    </div>
                    <div className="home-benefit-card">
                        <img src={icon3} alt="icon3" />
                        <div className="home-benefit-icon"></div>
                        <h2>Life skills</h2>
                        <p>
                            Learn teamwork, communication, and resilience through
                            hands-onkayaking challenges
                        </p>
                    </div>
                    <div className="home-benefit-card">
                        <img src={icon4} alt="icon4" />
                        <div className="home-benefit-icon"></div>
                        <h2>Confidence</h2>
                        <p>
                            Master kayaking to boost self-trust and readiness to tackle new
                            challenges
                        </p>
                    </div> */}

            </div>

            {/* ################################################## CONTACT ############################### */}

            <ContactInput />



        </div>
    )
}

export default Home
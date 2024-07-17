// import React from 'react'

import ScrollButton from "./general/ScrollButton";
import GradientCircle from "./general/GradientCircle";

function About() {
  return (
    <div>
      <ScrollButton />

      <h1>About</h1>
      <div className="flex justify-between items-center p-8">
        <GradientCircle size="small" text1="6" text2="years" />
        <GradientCircle size="big" text1="23" text2="trips" />
        <GradientCircle size="small" text1="72" text2="children" />
      </div>
    </div>
  );
}

export default About;

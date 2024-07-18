import React from "react";


const GradientButton = ({ text = "my text here" }) => {
  return (
    <h1 className="text-4xl font-bold uppercase ">
      <span className="bg-gradient-to-b from-green to-red  text-transparent bg-clip-text">
      {/* <span className="bg-gradient-to-b from-[#029419] to-[#E5C103] inline-block text-transparent bg-clip-text"> */}
        {text}
      </span>
    </h1>
  );
};

export default GradientButton;

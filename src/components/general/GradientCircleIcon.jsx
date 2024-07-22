import React from "react";

const GradientCircle = ({ icon , text1 , text2 }) => {

  return (
    <div
      className="w-32 h-32 shadow-[1px_1px_3px_rgba(0,0,0,0.6)] rounded-full bg-gradient-to-b from-[#7DE581] to-[#FFD977] flex flex-col items-center justify-center"
    >
      <img src={icon} alt="" className="w-12"/>
      <span className=" text-xl text-main-text-dark font-bold">{text1}</span>
      <span className=" text-lg text-main-text-dark">{text2}</span>
    </div>
  );
};

export default GradientCircle;

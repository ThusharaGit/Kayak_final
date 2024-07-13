import React from "react";

const GradientCircle = ({ size = "small", text1 = "No.", text2 = "Text" }) => {
  let circle_size, text_size1, text_size2;

  if (size === "small") {
    circle_size = "w-32 h-32";
    text_size1 = "text-4xl";
    text_size2 = "text-2xl";
  } else {
    circle_size = "w-48 h-48";
    text_size1 = "text-6xl";
    text_size2 = "text-4xl";
  }
  return (
    <div
      className={`${circle_size} shadow-[1px_1px_3px_rgba(0,0,0,0.6)] rounded-full bg-gradient-to-b from-[#7DE581] to-[#FFD977] flex flex-col items-center justify-center`}
    >
      <span className={`${text_size1} text-main-text-dark font-bold`}>{text1}</span>
      <span className={`${text_size2} text-main-text-dark`}>{text2}</span>
    </div>
  );
};

export default GradientCircle;

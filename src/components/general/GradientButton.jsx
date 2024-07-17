import React from "react";

import { Link } from "react-router-dom";

const GradientButton = ({ text = "Button Link", route="/" }) => {
  return (
    <Link
      to={route}
      className="      
        w-[180px] h-[56px]
        flex items-center justify-center
        bg-gradient-to-r from-[#47B83E] to-[#EFC737]
        rounded-[25px]
        shadow-[1px_1px_3px_rgba(0,0,0,0.6)]
        text-main-text-light text-[18px]  uppercase font-niramit        
      "
    >
      {text}
    </Link>
  );
};

export default GradientButton;

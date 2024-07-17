import React from "react";

import { Link } from "react-router-dom";
import right_button from "../../images/more_right_button.svg";

const MoreButton = ({ text = "Read More", route="/"  }) => {
  return (
    
    <Link to={route} className="flex items-center bg-transparent p-4">
    <span className="text-accent-green font-semibold text-xl sm:text-lg mr-2.5 uppercase">
    {text}
    </span>
    <img src={right_button} alt="" srcset="" />
  </Link>
  );
};

export default MoreButton;

// import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ContactCard from "./ContactCard";
import ScrollButton from "./general/ScrollButton";
import ScrollTextButton from "./general/ScrollTextButton";

import contact_pic2 from "../images/contact_pic2.jpg";
import contacthero from "../images/contact-hero.svg";

function Contact() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="mt-16 bg-bg-color flex flex-col items-center">
      <ScrollButton />

      <img className="w-full" src={contacthero} alt="" />
      <h1 className="w-full px-8 py-8 text-2xl text-center">
        Get in touch with us to plan the next exciting trip!{" "}
      </h1>
      <ContactCard contact_pic={contact_pic2} />
      <ScrollTextButton />
    </div>
  );
}

export default Contact;

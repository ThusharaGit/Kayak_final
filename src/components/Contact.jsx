// import React from 'react'

import ContactCard from "./ContactCard";
import ScrollButton from "./general/ScrollButton";

import contact_pic from "../images/contact_pic.jpg";
import contacthero from "../images/contact-hero.svg";

function Contact() {
  return (
    <div className="mt-16">

<ScrollButton />

      <h1>Get in touch with us to plan the next exciting trip! </h1>
      <img className="w-full" src={contacthero} alt="" /> 
       <ContactCard contact_pic={contact_pic} />
    </div>
  );
}

export default Contact;

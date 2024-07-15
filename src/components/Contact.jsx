// import React from 'react'

import ContactCard from "./ContactCard";

import contact_pic from "../images/contact_pic.jpg";

function Contact() {
  return (
    <div>
      <h1>Get in touch with us to plan the next exciting trip! </h1> 
      <ContactCard contact_pic={contact_pic} />
    </div>
  );
}

export default Contact;

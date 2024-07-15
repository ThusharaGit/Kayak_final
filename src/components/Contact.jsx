// import React from 'react'

import ContactCard from "./ContactCard";

import contact_pic from "../images/contact_pic.svg";

function Contact() {
  return (
    <div>
      Contact
      <ContactCard contact_pic={contact_pic} />
    </div>
  );
}

export default Contact;

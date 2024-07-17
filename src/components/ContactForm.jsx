import React, { useRef } from "react";

import GradientButton from "./general/GradientButton";

function ContactForm() {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      Name: nameRef.current.value,
      Phone: phoneRef.current.value,
      Email: emailRef.current.value,
      Message: messageRef.current.value,
    });
    // Clear input fields
    nameRef.current.value = "";
    phoneRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div className="w-full px-8 py-6 ">
      <h2 className="text-xl md:text-2xl text-center mb-4">CONTACT US</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-main-text-dark text-md md:text-lg"
      >
        <div>
          <label htmlFor="name" className="block">
            Name *
          </label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            name="name"
            className="w-full border-b-2 border-accent-green focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block  ">
            Phone number
          </label>
          <input
            ref={phoneRef}
            type="tel"
            id="phone"
            name="phone"
            className="w-full border-b-2 border-accent-green focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block ">
            Email *
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            name="email"
            className="w-full border-b-2 border-accent-green focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="message" className="block">
            Message *
          </label>
          <textarea
            ref={messageRef}
            id="message"
            name="message"
            rows="3"
            className="w-full border-b-2 border-accent-green focus:outline-none"
          ></textarea>
        </div>
        <h6>* required</h6>
        <div className="flex justify-center">
          <button
            type="submit"
            className="      
              w-[180px] h-[56px]
              flex items-center justify-center
              bg-gradient-to-r from-[#47B83E] to-[#EFC737]
              rounded-[25px]
              shadow-[1px_1px_3px_rgba(0,0,0,0.6)]
              text-main-text-light text-[18px]  uppercase font-niramit        
            "
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

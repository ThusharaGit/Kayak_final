// import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ScrollButton from "./general/ScrollButton";
import ScrollTextButton from "./general/ScrollTextButton";
import BlackButton from "./general/BlackButton";

import data from "../data/db.json";
import faqhero from "../images/faq-hero.svg";

function Faq() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const faqs = data.faq;
  console.log(faqs);

  return (
    <div className="mt-16 bg-bg-color flex flex-col items-center space-y-12">
      <ScrollButton />

      <img className="w-full" src={faqhero} alt="" />

      <h1 className="w-full px-8 py-8 text-2xl text-center">
        Welcome to our FAQ page! Here you can find answers to the quesitons
        about out trips which are commonly asked by the parents and their
        children.{" "}
      </h1>

      <div className="md:w-4/5 md:px-0 w-full px-12 mx-auto">
        {faqs.map((faq) => (
          <details
            key={faq.faq_id}
            className="mb-4 pl-2 bg-main-text-light rounded-lg"
          >
            <summary className="text-xl cursor-pointer uppercase">
              {faq.faq_question}
            </summary>
            <div className="mt-2 pl-4">
              <p>{faq.faq_answer}</p>
              <div className="w-1/5 mb-2">
                <img src={faq.faq_URL} alt={faq.faq_URL} />
              </div>
            </div>
          </details>
        ))}
      </div>

      <div className="w-2/3 mx-auto p-4 text-xl text-center rounded-lg flex flex-col items-center space-y-4 bg-gradient-to-b from-[#BFFFB5] to-[#FFF9BF]">
        <h1>Still have a question?</h1>

        <h1>
          Contact us for more details. Lorem ipsum sit amet, adipiscing elit.
        </h1>

        <BlackButton text="Contact us" route="/contact" />
      </div>

      <ScrollTextButton />
    </div>
  );
}

export default Faq;

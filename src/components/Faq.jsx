// import React from 'react'

import data from "../data/db.json";


function Faq() {

  const faqs = data.faq;
  console.log(faqs);

  return (
    <div className="mt-16">
      <h1>FAQ</h1>

      {faqs.map((faq) => (
        <details key={faq.faq_id} className="px-8 mb-4">
        <summary className="text-xl font-bold cursor-pointer">
          {faq.faq_question}
        </summary>
        <div className="mt-2">
          <div className="w-1/5 mb-2">
            <img src={faq.faq_URL} alt={faq.faq_URL} />
          </div>
          <p>{faq.faq_answer}</p>
        </div>
      </details>
      ))}




    </div>
  )
}

export default Faq
import React from "react";

import quoteL from "../images/quoteL.svg";
import quoteR from "../images/quoteR.svg";

function SliderComments({ comments }) {
  return (
    <>
      <div className="w-full p-4 rounded-[25px] bg-gradient-to-b from-[#7DE581] to-[#FFD977] ring-2 ring-red">
        <img src={quoteL} alt="" className="ml-4" />
        <div className="w-full px-8">
          <p>
            As a parent, seeing my child's growth through PaddleXplorer has been
            an absolute joy. The unique blend of outdoor adventure and character
            development has boosted his confidence immensely. He made great
            friends and learned invaluable life skills - all while having a ton
            of fun on the water. I couldn't recommend PaddleXplorer less!
          </p>
          <p>Brindusa W., Proud Parent</p>
        </div>
        <img src={quoteR} alt="" className="mr-4 ml-auto" />
      </div>
      <div className="w-full p-4 rounded-[25px] bg-gradient-to-b from-[#7DE581] to-[#FFD977] ring-2 ring-red">
        {comments.map((comment) => (
          <div
            key={comment.comment_id}
            className="flex flex-col sm:flex-row justify-center items-center text-center px-8 space-y-4"
          >
            <div className="">
              <h2 className="">{comment.comment_text}</h2>

              <p>{comment.comment_author}</p>
            </div>
          </div>
        ))}
      </div>

      
    </>
  );
}

export default SliderComments;

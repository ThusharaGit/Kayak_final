import React, { useState } from "react";

import quoteL from "../images/quoteL.svg";
import quoteR from "../images/quoteR.svg";

function SliderComments({ comments }) {
  // show the card with this index
  const [currentIndex, setCurrentIndex] = useState(0);

  // move to the next card
  // if we are at the end, go to the first card
  const next = () => {
    setCurrentIndex((currentIndex + 1) % comments.length);
  };

  // move to the previous card
  // if we are at the beginning, go to the last card
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + comments.length) % comments.length);
  };

  return (
    <>
      <div className="w-full p-4 rounded-[25px] bg-gradient-to-b from-[#7DE581] to-[#FFD977]">
        <img src={quoteL} alt="" className="ml-4" />

        {comments &&
          comments.map((comment) => (
            <div
              key={comment.comment_id}
              className={`flex flex-col  justify-center px-8 space-y-4
                ${comments[currentIndex].comment_id === comment.comment_id
                  ? 'opacity-100 transition-opacity duration-300 ease-in-out'
                  : 'hidden opacity-0 transition-opacity duration-300 ease-in-out'
                }
              `}
            >
              <p>{comment.comment_text}</p>
              <p>{comment.comment_author}</p>
            </div>
          ))}

        <img src={quoteR} alt="" className="mr-4 ml-auto" />

        {/* Render dots indicator for trips*/}
        <div className="w-full flex justify-center items-center space-x-4">
        {comments.map((comment) => (
          <span
            key={comment.comment_id}
            // highlight the dot that corresponds to the current card
            className={`w-4 h-4 rounded-full
              ${comments[currentIndex].comment_id === comment.comment_id
                ? 'bg-accent-green'
                : 'bg-main-text-light'
              }
            `}
            // when the user clicks on a dot, go to the corresponding card
            onClick={() => setCurrentIndex(comments.indexOf(comment))}
          ></span>
        ))}
      </div>

        {/* end */}
      </div>
    </>
  );
}

export default SliderComments;

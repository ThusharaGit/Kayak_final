import React from 'react'

function SliderTours({trips_done}) {

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
    <div>SliderTours</div>
  )
}

export default SliderTours
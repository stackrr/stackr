import React from "react";

function CarouselCard(props) {
  const { text } = props;
  return (
    <div className="w-full h-60 flex text-5xl font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      {text}
    </div>
  );
}

export default CarouselCard;

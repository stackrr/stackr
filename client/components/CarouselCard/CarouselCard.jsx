import React from "react";

function CarouselCard(props) {
  const { text } = props;
  return (
    <div
      style={{ height: "300px" }}
      className="w-full h-60 flex text-xl md:text-2xl lg:text-4xl xl:text-5xl justify-center items-center font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-400 via-sky-500 to-purple-400"
    >
      {text}
    </div>
  );
}

export default CarouselCard;

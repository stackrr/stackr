import React from "react";
import Carousel from "react-elastic-carousel";
import CarouselCard from "./CarouselCard";
import texts from "../Home/data";
function HomeCarousel() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Carousel className="">
        {texts.map((text, idx) => (
          <CarouselCard key={idx} text={text} />
        ))}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;

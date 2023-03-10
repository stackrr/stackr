import React from "react";
import Carousel from "react-elastic-carousel";
import CarouselCard from "./CarouselCard";
import texts from "./data";
function HomeCarousel() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Carousel style={{ height: "320px" }}>
        {texts.map((text, idx) => (
          <CarouselCard key={idx} text={text} />
        ))}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;

import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./Slider-data";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval); //cleanup function
  }, [currentSlide, slideInterval, autoScroll]);

  return (
    <div className="slider">
      <AiOutlineArrowLeft
        className="arrow prev"
        size={25}
        onClick={prevSlide}
      />
      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;
        return (
          <div
            key={index}
            className={index === currentSlide ? "slide current" : "slide"}
          >
            {" "}
            {index === currentSlide && (
              <>
                <img src={image} alt="sliding images" />
                <div className="content">
                  <h2> {heading} </h2>
                  <p>{desc}</p>
                  <hr />
                 
                </div>
              </>
            )}
          </div>
        );
      })}
      <AiOutlineArrowRight
        className="arrow next"
        size={25}
        onClick={nextSlide}
      />
    </div>
  );
};

export default Slider;

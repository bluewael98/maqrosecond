"use client";
import React from "react";
import { CarouselData } from "./CarouselData";
import { useState } from "react";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";

const LandingCarousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSLide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSLide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="mx-auto w-screen my-[100px] relative">
      {CarouselData.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "opacity-[1] ease-in duration-300"
                : "opacity-0"
            }
          >
            <div className="absolute top-[50%] z-50 left-[2%] ">
              <ArrowCircleLeft
                onClick={prevSLide}
                className="  cursor-pointer select-none z-[30] text-white text-[50px]"
                fontSize="large"
              />
            </div>
            {index === current && (
              <>
                <img
                  src={slide.image}
                  alt="/"
                  className="object-cover opacity-70 w-full  max-h-[600px]"
                />
                <p className="text-white absolute top-[50%] left-[25%] xxs:w-full xxl:max-w-[50%] xxl:text-5xl sm:text-3xl xs:text-xl xxs:text-lg opacity-90 max-w-[80%]">
                  {slide.text}
                </p>
              </>
            )}
            <div className="absolute top-[50%] z-50 right-[2%] ">
              <ArrowCircleRight
                onClick={nextSLide}
                className="  cursor-pointer select-none z-[30] text-white text-[50px] "
                fontSize="large"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LandingCarousel;

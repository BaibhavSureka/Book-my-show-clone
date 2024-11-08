import React, { useState } from 'react';
import HeroSlider from 'react-slick';
import { NextArrow, PrevArrow } from './Arrows.Component';

const HeroCarousel = () => {
  const [images] = useState([
    {
      backdrop_path: "/ugS5FVfCI3RV0ZwZtBV3HAV75OX.jpg",
      title: "Dragon Ball Super: Super Hero",
    },
    {
      backdrop_path: "/rqgeBNWXas1yrAyXxwi9CahfScx.jpg",
      title: "Fall",
    },
  ]);

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: false, // Set to false for static view
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="lg:hidden">
        <HeroSlider {...settings}>
          {images.map((image, index) => (
            <div className="w-full h-56 md:h-80 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt={image.title}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>

      <div className="hidden lg:block">
        <HeroSlider {...settings}>
          {images.map((image, index) => (
            <div className="w-full h-96 px-2 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt={image.title}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;

import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "./images/data";
import classes from "./Carousel.module.css";

function CarouselEffect() {
  return (
    <div className={classes.carousel_container}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => (
          <img
            key={index}
            src={imageItemLink}
            alt={`carousel-${index}`}
          />
        ))}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}

export default CarouselEffect;
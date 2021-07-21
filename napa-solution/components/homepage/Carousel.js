import { convertArrToObject } from "../../util/converArrayToObject";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React, { useState, useEffect, StrictMode } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const Carouseler = (props) => {
  const data = convertArrToObject(props.data?.property);

  const listSlide = Object.values(data).filter((item) =>
    item.name.includes("Home_Carousel_Slide")
  );

  // console.log("Data Carousel:", data, listSlide);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === listSlide.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? listSlide.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = listSlide.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
        id={`"carousel-item-${index + 1}"`}
        className="carousel-item"
      >
        <LazyLoadImage
          alt={index}
          effect="blur"
          src={item.image?.original}
          placeholderSrc={item.image?.thumbnail}
          threshold={100}
          width="100%"
          height={650}
          style={{ maxHeight: "650px" }}
        />

        {index == 3 ? (
          <>
            <div
              id="carousel-caption"
              className="carousel-caption carousel-4-caption"
            >
              <span className="font-carousel-4">
                <span className="font-carousel-4-line">
                  {data[`Home_Carousel_Caption${index + 1}_1`]?.key}
                </span>
                <span className="font-carousel-4-small">
                  {data[`Home_Carousel_Caption${index + 1}_1`]?.value}
                </span>
              </span>
              <div className="carousel-text-wrapper">
                <span className="font-carousel-4b">
                  <span className="font-carousel-4-line">
                    {data[`Home_Carousel_Caption${index + 1}_2`]?.key}
                  </span>
                  <span className="font-carousel-4-small">
                    {data[`Home_Carousel_Caption${index + 1}_2`]?.value}
                  </span>
                </span>
                <div className="blue-under-line"></div>
              </div>
            </div>
            <a href="recruit.html">
              <div className="detail-btn">
                <img
                  src="./img/index-image-04.svg"
                  className="detail-btn-icon"
                />
                <span className="detail-btn-text">
                  {data[`Home_Carousel_Btn${index + 1}`]?.value}
                </span>
              </div>
            </a>
          </>
        ) : (
          <>
            <div id="carousel-caption" className="carousel-caption">
              <span className="carousel-caption-primary">
                {data[`Home_Carousel_Caption${index + 1}_1`]?.value}
              </span>
              <div className="carousel-text-wrapper">
                <span className="carousel-caption-secondary">
                  {data[`Home_Carousel_Caption${index + 1}_2`]?.value}
                </span>
                <div className="blue-under-line"></div>
              </div>
            </div>
            <a href="company.html">
              <div className="detail-btn">
                <img
                  src="./img/index-image-04.svg"
                  className="detail-btn-icon"
                />
                <span className="detail-btn-text">
                  {data[`Home_Carousel_Btn${index + 1}`]?.value}
                </span>
              </div>
            </a>
          </>
        )}
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={listSlide}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <a
        id="carousel-control-prev"
        className="carousel-control-prev"
        href="#carousel"
        role="button"
        data-slide="prev"
        onClick={previous}
      >
        <img
          alt="Previous"
          src="./img/index-image-05.svg"
          className="previous-btn-carousel"
        />
        <span className="sr-only">Previous</span>
      </a>
      <a
        id="carousel-control-next"
        className="carousel-control-next"
        href="#carousel"
        role="button"
        data-slide="next"
        onClick={next}
      >
        <img
          alt="Next"
          src="./img/index-image-06.svg"
          className="next-btn-carousel"
        />
        <span className="sr-only">Next</span>
      </a>
    </Carousel>
  );
};

export default Carouseler;

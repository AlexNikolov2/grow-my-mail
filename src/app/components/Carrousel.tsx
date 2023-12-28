/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Slider from "react-slick";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carrousel() {
  const CustomPrevArrow = (props: { onClick: React.MouseEventHandler<HTMLDivElement> | undefined; }) => (
    <div
      className="hidden slick-arrow slick-prev p-2 rounded-full"
      onClick={props.onClick}
      style={{ left: "-30px", zIndex: 1 }}
    >
      Previous
    </div>
  );

  const CustomNextArrow = (props: { onClick: React.MouseEventHandler<HTMLDivElement> | undefined; }) => (
    <div
      className="hidden slick-arrow slick-next p-2 rounded-full"
      onClick={props.onClick}
      style={{ right: "-30px", zIndex: 1 }}
    >
      Next
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow onClick={undefined} />,
    nextArrow: <CustomNextArrow onClick={undefined} />,
  };

  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.png",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpeg",
    "18.jpg",
    "19.jpg",
    "20.jpg",
    "21.jpeg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
  ];

  return (
    <div className="w-auto sm:max-w-[55%] mx-auto">
      <h2 className="text-4xl text-center pb-5">Ready? Set... Results!</h2>
      <div className="mx-auto">
        <div className="mx-auto">
          <Slider {...sliderSettings} className="mx-auto">
            {images.map((image, index) => (
              <div
                key={index}
                className="h-64 flex flex-col justify-center items-center mx-auto"
              >
                <img
                  src={`/carrousel_img/${image}`}
                  alt={`slide-${index}`}
                  className="max-w-full max-h-full object-fill m-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );

}

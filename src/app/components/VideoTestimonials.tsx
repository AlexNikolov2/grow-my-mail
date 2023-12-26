"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from 'react-player';

export function VideoTestimonials() {
  const CustomPrevArrow = (props: { onClick: React.MouseEventHandler<HTMLDivElement> | undefined; }) => (
    <div
      className="slick-arrow slick-prev p-2 rounded-full absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer bg-gray-800 text-white"
      onClick={props.onClick}
    >
      Previous
    </div>
  );

  const CustomNextArrow = (props: { onClick: React.MouseEventHandler<HTMLDivElement> | undefined; }) => (
    <div
      className="slick-arrow slick-next p-2 rounded-full absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer bg-gray-800 text-white"
      onClick={props.onClick}
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

  const videos = [
    { id: 1, videoId: "lOVMUSDoxuM" },
    { id: 2, videoId: "YHlSDJ-wVd8" },
  ];

  return (
    <section className="testimonials text-center p-8">
      <h2 className="text-4xl mb-4">Real clients, real results.</h2>
      <h3 className="text-lg mb-8">Video testimonials from clients</h3>
      <section className="videos relative mx-auto max-w-[300px] md:max-w-full">
        <Slider {...sliderSettings} className="flex justify-center">
          {videos.map((video) => (
            <ReactPlayer
              key={video.id}
              url={`https://www.youtube.com/watch?v=${video.videoId}`}
              className="w-full h-full"
            />
          ))}
        </Slider>
      </section>
    </section>
  );
}
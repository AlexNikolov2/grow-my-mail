/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react';
import Slider from 'react-slick';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carrousel() {
    const CustomPrevArrow = (props) => (
        <div
            className="slick-arrow slick-prev text-white bg-blue-500 p-2 rounded-full"
            onClick={props.onClick}
            style={{ left: '30px', zIndex: 1 }}
        >
            Previous
        </div>
    );

    const CustomNextArrow = (props) => (
        <div
            className="slick-arrow slick-next"
            onClick={props.onClick}
            style={{ right: '30px', zIndex: 1 }}
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
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    const images = [
        'SuperFeast-4month-mark-Jun-Nov2023.jpg',
        'SuperFeast-Oct-Campaigns-2023.jpg',
        'SuperFeast-top-performing-flows-May-Nov-2023.jpg',
    ];

    return (
        <div className="w-full mx-auto">
            <Slider {...sliderSettings}>
                {images.map((image, index) => (
                    <div key={index} className="h-64 flex flex-col mx-auto">
                        <img
                            src={`/carrousel_img/${image}`}
                            alt={`slide-${index}`}
                            className="max-w-full max-h-full"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
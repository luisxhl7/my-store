import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SimpleSlider.scss'

export const SimpleSlider = ({children, customSettings}) => {
  const settings = customSettings ? customSettings : {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className='slider-local'>
      {children}
    </Slider>
  );
};

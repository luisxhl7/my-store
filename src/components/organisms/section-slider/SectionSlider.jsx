import React from 'react'
import { SimpleSlider } from '../../molecules/simpleSlider'
import { CardProductCategory } from '../../molecules/card-product-category'
import { dataOfSections } from '../../../data/dataOfSections'
import './SectionSlider.scss'

export const SectionSlider = () => {
  const customSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };


  return (
    <div className='sectionSlider'>
      <SimpleSlider customSettings={customSettings}>
        {dataOfSections.map( (item, idx ) => (
          <div className='sectionSlider__content-card' key={idx}>
            <CardProductCategory image={item?.image} url={item?.url} text={item?.text}/>
          </div>
        ))}
      </SimpleSlider>
    </div>
  )
}

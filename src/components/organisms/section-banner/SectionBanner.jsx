import React from 'react'
import { NavLink } from 'react-router-dom';
import { SimpleSlider } from '../../molecules/simpleSlider'
import './SectionBanner.scss'

export const SectionBanner = () => {
    const customSettings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                },
            },
        ],
    };
    
    return (
        <div className='sectionBanner'>
            <SimpleSlider customSettings={customSettings}>
            <NavLink to={`/productos/diademas`}>
                <div className='sectionBanner__banner --image1'>diademas</div>
            </NavLink>
            <NavLink to={`/productos/smarwach`}>
                <div className='sectionBanner__banner --image2'>smarwach</div>
            </NavLink>
            <NavLink to={`/productos/chasis`}>
                <div className='sectionBanner__banner --image3'>chasis</div>
            </NavLink>
            </SimpleSlider>
        </div>
    )
}

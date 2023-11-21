import React from 'react'
import { SectionCardsProducts } from '../../organisms/section-cards-products'
import { SectionBanner } from '../../organisms/section-banner/SectionBanner'
import { SectionSlider } from '../../organisms/section-slider'
import './home.scss'

export const Home = () => {
    return (
        <> 
            <SectionBanner/>
            <SectionSlider/>
            <h1 className='title-home'>Nuestras promociones</h1>
            <SectionCardsProducts/>
        </>
    )
}

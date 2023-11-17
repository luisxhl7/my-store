import React from 'react'
import { SectionSlider } from '../../organisms/section-slider'
import { SectionCardsProducts } from '../../organisms/section-cards-products'
import { SectionBanner } from '../../organisms/section-banner/SectionBanner'
import { useParams } from 'react-router-dom'

export const Products = () => {
    const {id} = useParams()

    return (
        <> 
            {
                !id &&
                <SectionBanner/>
            }
            <SectionSlider/>
            <SectionCardsProducts/>
        </>
    )
}

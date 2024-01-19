import React from 'react'
import { useParams } from 'react-router-dom'
import { CardProducts } from '../../molecules/card-products'
import { dataProducts } from '../../../data/dataProducts'
import Product from '../../../service/product-service'
import './SectionCardsProducts.scss'

export const SectionCardsProducts = () => {
    const {id} = useParams()
    const data = Product.filterForId(dataProducts,id);
    const dataDiscount = Product.filterForDiscount(dataProducts);

    return (
        <div className={`sectionCardsProducts ${data.length === 0 ? '--center-info': ''}`}>
            {!id ?
                dataDiscount?.map( item => (
                    <CardProducts
                        key={item.id}
                        {...item}
                    />
                ))
                :
                data.length > 0 ?
                    data?.map( item => (
                        <CardProducts
                            key={item.id}
                            {...item}
                        />
                    ))
                :
                <>
                    Productos no disponibles
                </>

            }
        </div>
    )
}

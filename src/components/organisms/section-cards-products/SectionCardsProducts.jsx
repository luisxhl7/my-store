import React from 'react'
import { useParams } from 'react-router-dom'
import { CardProducts } from '../../molecules/card-products'
import { dataProducts } from '../../../data/dataProducts'
import './SectionCardsProducts.scss'

export const SectionCardsProducts = () => {
    const {id} = useParams()
    const data = dataProducts?.filter(producto => producto.category.includes(id));
    const dataDiscount = dataProducts?.filter(producto => producto.discount > 0);

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

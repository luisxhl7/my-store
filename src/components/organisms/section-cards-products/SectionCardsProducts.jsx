import React from 'react'
import './SectionCardsProducts.scss'
import { CardProducts } from '../../molecules/card-products'
import { useParams } from 'react-router-dom'
import { dataProducts } from '../../../data/dataProducts'

export const SectionCardsProducts = () => {
    const {id} = useParams()
    const data = dataProducts?.filter(producto => producto.category.includes(id));

    return (
        <div className={`sectionCardsProducts ${data.length === 0 ? '--center-info': ''}`}>
            {!id ?
                dataProducts?.map( item => (
                    <CardProducts
                        key={item.id}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        category={item.category}
                        shippingPrice={item.shippingPrice}
                    />
                ))
                :

                data.length > 0 ?
                    data?.map( item => (
                        <CardProducts
                            key={item?.id}
                            name={item?.name}
                            image={item?.image}
                            price={item?.price}
                            category={item?.category}
                            shippingPrice={item?.shippingPrice}
                            product={item}
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

import { AddShoppingCart, ShoppingCartOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { formatMoney } from '../../../utils/formatMoney';
import Product from '../../../service/product-service';

export const SectionInfoProduct = (product) => {
    const { name, image, price, discountedPrice, discount, id, marca, units, description, shippingPrice } = product;
    const [isInTheCart, setIsInTheCart] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        setIsLoad(true)
        setIsInTheCart(JSON.parse(localStorage.getItem('dataOfCart')))
        
        setTimeout(() => {
            setIsLoad(false)
        }, 1000);
    }, [])

    const handleOpenDescription = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className='page-product__product'>

                <div className='page-product__content-image'>
                    <figure className={`page-product__content-image__image ${!image ? '--isload' : ''}`}>
                        {image &&
                            <img 
                                src={image} 
                                alt={name}
                                title={name}
                            />
                        }
                    </figure>
                </div>

                <div className='page-product__content-info --mobile'>
                    <div>
                        <h1 className={`page-product__content-info__title ${!name ? '--isLoad' : ''}`}>
                            {name ? name : 'xxxxxxx xxxxxx xxxxx xxxx xxxxxxx xxxxxx xxxxx xxxx'}
                        </h1>
                        <div className='page-product__content-info'>
                            <div className={`page-product__content-info__text ${!marca ? '--isLoad' : ''}`}>
                                <span>
                                    Marca: {marca}
                                </span>
                            </div>
                            <div className={`page-product__content-info__text ${!units ? '--isLoad' : ''}`}>
                                <span>
                                    Unidades disponible: {units}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='page-product__content-info '>
                        {discount &&
                        <div className={`page-product__content-info__text ${!discountedPrice ? '--isLoad' : ''}`}>
                            <span className='page-product__content-info__text__origin-price'>
                                {price ?
                                    formatMoney(price) 
                                    :
                                    'xxx xxxx xxx'
                                }
                            </span>
                            <span className='page-product__content-info__text__discount'>
                                -{discount}%
                            </span>
                        </div>
                        }
                        <div className={`page-product__content-info__text ${!discountedPrice ? '--isLoad' : ''}`}>
                            <span className='page-product__content-info__text__final-price'>
                                {formatMoney( discountedPrice )} 
                            </span>
                        </div>
                        <div className={`page-product__content-info__text`}>
                            <span className='page-product__content-info__text__shippingPrice'>
                                {shippingPrice === 0 ? 'Envío Gratis' : shippingPrice}
                            </span>
                        </div>
                    </div>
                    
                    {isInTheCart ?
                        isInTheCart.some((producto) => producto.name === name) ?
                        <button className='page-product__button' title='Remover del carrito' onClick={ !isLoad ? () => Product.deletePorductsForId(id,setIsInTheCart) : null}>
                            <ShoppingCartOutlined className={`page-product__button__icon --agree` }/>
                            Eliminar del carrito
                        </button>
                        :  
                        <button className='page-product__button' title='Añadir al carrito' onClick={!isLoad ? () => Product.addProductForId(product, setIsInTheCart): null}>
                            <AddShoppingCart className={`page-product__button__icon --agree` }/>
                            Añadir al carrito
                        </button>
                        :
                        <button className='page-product__button' title='Añadir al carrito'onClick={!isLoad ? () => Product.addProductForId(product, setIsInTheCart): null}>
                            <AddShoppingCart className={`page-product__button__icon --agree` }/>
                            Añadir al carrito
                        </button>
                    }
                </div>
            </div>
            {description &&
                <div className={`page-product__description-product ${isOpen ? '--isOpen' : '--isHide'}`}>
                    <h2>Descripción</h2>
                    <p>{description}</p>
                    <span className='page-product__description-product__more-info' onClick={handleOpenDescription}>
                        {isOpen ? 'Ver menos' : 'Ver más'}
                    </span>
                </div>
            }
        </>
    )
}

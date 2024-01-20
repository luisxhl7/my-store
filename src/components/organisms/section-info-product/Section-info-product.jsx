import { AddShoppingCart, ShoppingCartOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { formatMoney } from '../../../utils/formatMoney';
import Product from '../../../service/product-service';

export const SectionInfoProduct = (product) => {
    const { name, image, price, discountedPrice, discount, id, marca, units, description } = product;
    const [isInTheCart, setIsInTheCart] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [isLoad, setIsLoad] = useState(true)

    useEffect(() => {
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
                    <figure className='page-product__content-image__image'>
                        <img 
                        src={image} 
                        alt={name}
                        title={name}
                        />
                    </figure>
                </div>

                <div className='page-product__content-info --mobile'>
                    <div>
                        <h1>{name}</h1>
                        <div className='page-product__content-info'>
                        <div className='page-product__content-info__text'>
                            <span>
                            Marca: {marca}
                            </span>
                        </div>
                        <div className='page-product__content-info__text'>
                            <span>
                            Unidades disponible: {units}
                            </span>
                        </div>
                        </div>
                    </div>

                    <div className='page-product__content-info '>
                        {discount &&
                        <div className='page-product__content-info__text'>
                            <span className='page-product__content-info__text__origin-price'>
                                {formatMoney(price) ? formatMoney(price) : '0'} 
                            </span>
                            <span className='page-product__content-info__text__discount'>
                                -{discount}%
                            </span>
                        </div>
                        }
                        <div className='page-product__content-info__text'>
                            <span className='page-product__content-info__text__final-price'>
                                {formatMoney( discountedPrice )} 
                            </span>
                        </div>
                    </div>
                    
                    {isInTheCart ?
                        isInTheCart.some((producto) => producto.name === name) ?
                        <button className='page-product__button' title='Remover del carrito' onClick={ () => Product.deletePorductsForID(id)}>
                            <ShoppingCartOutlined className={`page-product__button__icon --agree` }/>
                            Eliminar del carrito
                        </button>
                        :  
                        <button className='page-product__button' title='Añadir al carrito' onClick={() => Product.addProductForId(product, setIsInTheCart)}>
                            <AddShoppingCart className={`page-product__button__icon --agree` }/>
                            Añadir al carrito
                        </button>
                        :
                        <button className='page-product__button' title='Añadir al carrito'onClick={() => Product.addProductForId(product, setIsInTheCart)}>
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

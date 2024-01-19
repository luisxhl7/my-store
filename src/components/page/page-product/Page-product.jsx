import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AddShoppingCart, ShoppingCartOutlined } from '@mui/icons-material';
import Product from '../../../service/product-service';
import { formatMoney } from '../../../utils/formatMoney';
import { dataProducts } from '../../../data/dataProducts'
import { SimpleSlider } from '../../molecules/simpleSlider';
import { CardProducts } from '../../molecules/card-products';
import './page-product.scss'

export const PageProduct = () => {
  const {id} = useParams()
  const [isInTheCart, setIsInTheCart] = useState()
  const [isOpen, setIsOpen] = useState(false)
  
  const product = Product.filterForName(dataProducts, id);
  const {name, image, units, marca, price, discountedPrice, discount, description} = product[0]
  const productsDiscount = Product.filterForDiscount(dataProducts);

  useEffect(() => {
    setIsInTheCart(JSON.parse(localStorage.getItem('dataOfCart')))
  }, [])

  const handleOpenDescription = () => {
    setIsOpen(!isOpen)
  }

  const customSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: false,
    arrows: false,  
    responsive: [
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className='page-product'>

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
              <button className='page-product__button' title='Remover del carrito' onClick={ () => Product.deletePorductsForID(product[0]?.id)}>
                <ShoppingCartOutlined className={`page-product__button__icon --agree` }/>
                Eliminar al carrito
              </button>
              :  
              <button className='page-product__button' title='ñadir al carrito' onClick={() => Product.addProductForId(product[0], setIsInTheCart)}>
                <AddShoppingCart className={`page-product__button__icon --agree` }/>
                Añadir al carritoasdas
              </button>
            :
            <button className='page-product__button' title='ñadir al carrito'onClick={() => Product.addProductForId(product[0], setIsInTheCart)}>
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
          <div className='page-product__description-product__more-info' onClick={handleOpenDescription}>{isOpen ? 'Ver menos' : 'Ver más'}</div>
        </div>
      }

      <div className='page-product__similar-products'>
        <h2 className='page-product__title-similar-products'>Conoce nuestras promociones</h2>
        <SimpleSlider customSettings={customSettings}>
          {productsDiscount.map( (item ) => (
            <div className='page-product__content-card' key={item?.id}>
              <CardProducts {...item}/>
            </div>
          ))}
        </SimpleSlider>
      </div>
      
    </div>
  )
}

import React, { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate  } from 'react-router-dom'

import { AddShoppingCart, ShoppingCartOutlined } from '@mui/icons-material';
import Product from '../../../service/product-service';
import { formatMoney } from '../../../utils/formatMoney';
import { dataProducts } from '../../../data/dataProducts'
import { SimpleSlider } from '../../molecules/simpleSlider';
import { CardProducts } from '../../molecules/card-products';
import './page-product.scss'

export const PageProduct = () => {
  const {id} = useParams()
  const navigate = useNavigate();
  const [isInTheCart, setIsInTheCart] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState(false)
  
  const productsDiscount = Product.filterForDiscount(dataProducts);
  const pageProductRef = useRef(null);
  
  useEffect(() => {
    setIsInTheCart(JSON.parse(localStorage.getItem('dataOfCart')))
  }, [])
  
  
  useEffect(() => {
    setProduct(Product.searchForLink(dataProducts, id)?.[0]);
    
    window.location.hash = 'page-product'
    pageProductRef.current.scrollIntoView({ behavior: 'smooth' });

    if (Product.searchForLink(dataProducts, id) <= 0) {
      navigate('/home'); 
    }
  }, [id, product, navigate]);


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
    <div className='page-product' ref={pageProductRef}>

      <div className='page-product__product'>

        <div className='page-product__content-image'>
          <figure className='page-product__content-image__image'>
            <img 
              src={product?.image} 
              alt={product?.name}
              title={product?.name}
            />
          </figure>
        </div>

        <div className='page-product__content-info --mobile'>
          <div>
            <h1>{product?.name}</h1>
            <div className='page-product__content-info'>
              <div className='page-product__content-info__text'>
                <span>
                  Marca: {product?.marca}
                </span>
              </div>
              <div className='page-product__content-info__text'>
                <span>
                  Unidades disponible: {product?.units}
                </span>
              </div>
            </div>
          </div>

          <div className='page-product__content-info '>
            {product?.discount &&
              <div className='page-product__content-info__text'>
                <span className='page-product__content-info__text__origin-price'>
                  {formatMoney(product?.price) ? formatMoney(product?.price) : '0'} 
                </span>
                <span className='page-product__content-info__text__discount'>
                  -{product?.discount}%
                </span>
              </div>
            }
            <div className='page-product__content-info__text'>
              <span className='page-product__content-info__text__final-price'>
                {formatMoney( product?.discountedPrice )} 
              </span>
            </div>
          </div>
          
          {isInTheCart ?
            isInTheCart.some((producto) => producto.name === product?.name) ?
              <button className='page-product__button' title='Remover del carrito' onClick={ () => Product.deletePorductsForID(product?.id)}>
                <ShoppingCartOutlined className={`page-product__button__icon --agree` }/>
                Eliminar al carrito
              </button>
              :  
              <button className='page-product__button' title='ñadir al carrito' onClick={() => Product.addProductForId(product, setIsInTheCart)}>
                <AddShoppingCart className={`page-product__button__icon --agree` }/>
                Añadir al carritoasdas
              </button>
            :
            <button className='page-product__button' title='ñadir al carrito'onClick={() => Product.addProductForId(product, setIsInTheCart)}>
              <AddShoppingCart className={`page-product__button__icon --agree` }/>
              Añadir al carrito
            </button>
          }
        </div>

      </div>

      {product?.description &&
        <div className={`page-product__description-product ${isOpen ? '--isOpen' : '--isHide'}`}>
          <h2>Descripción</h2>
          <p>{product?.description}</p>
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

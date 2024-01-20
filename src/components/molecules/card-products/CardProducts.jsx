import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {AddShoppingCart, ShoppingCartOutlined} from '@mui/icons-material';
import Product from '../../../service/product-service';
import { formatMoney } from '../../../utils/formatMoney';
import { RotatingLines } from 'react-loader-spinner'
import './CardProducts.scss'

export const CardProducts = (product) => {
  const { name, image, price, shippingPrice, discountedPrice, discount,id, link } = product;
  const [isInTheCart, setIsInTheCart] = useState()
  const [isLoad, setIsLoad] = useState(true)
  
  useEffect(() => {
    setIsInTheCart(JSON.parse(localStorage.getItem('dataOfCart')))
    setTimeout(() => {
      setIsLoad(false)
    }, 1000);
  }, [])

  return (
    <div className='cardProducts'>
      <Link to={`/producto/${link}`}>
        <div className='cardProducts__image'>
          {
            isLoad ?
              <RotatingLines
                height="80"
                width="80"
                radius="9"
                strokeColor="#3d3d3d"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
              />
              :
            <img 
              src={image}
              alt={name} 
              title={name}  
            />
          }
        </div>
        <span className='cardProducts__title' title={name}  >
          {name}
        </span>
      </Link>
      {discount ?
        <>
          <div>
            <span className={`cardProducts__price ${discount ? '--price' : ''}`}>
              {formatMoney(price) ? formatMoney(price) :'0'}
            </span> 
            <span className='cardProducts__discount'>-{discount}% </span>
          </div>
          <span className='cardProducts__price-finish'>
            {formatMoney( discountedPrice )} 
          </span>
        </>
        :
        <div>
          <br />
          <span>
            {formatMoney(price) ? formatMoney(price) :'0'}
          </span>
        </div>
      }
      <div className='cardProducts__content-cart'>
        <span>
          {shippingPrice === 0 ? 'Envío Gratis' : shippingPrice}
        </span>
        {isInTheCart ?
          isInTheCart.some((producto) => producto.name === name) ?
            <button className={`cardProducts__button --agree` } title='Remover del carrito' onClick={ () => Product.deletePorductsForID(id)}>
              <ShoppingCartOutlined/>
            </button>
            :  
            <button className='cardProducts__button' title='Agregar al carrito' onClick={() => Product.addProductForId(product, setIsInTheCart)}>
              <AddShoppingCart/>
            </button>
          :
          <button className='cardProducts__button' title='Agregar al carrito' onClick={() => Product.addProductForId(product, setIsInTheCart)}>
            <AddShoppingCart/>
          </button>
        }
      </div>
    </div>
  )
}
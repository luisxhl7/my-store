import React, { useEffect, useState } from 'react'
import {AddShoppingCart, ShoppingCartOutlined} from '@mui/icons-material';
import { dataOfCart } from '../../../data/dataOfCart';
import { formatMoney } from '../../../utils/formatMoney';
import { RotatingLines } from 'react-loader-spinner'
import './CardProducts.scss'

export const CardProducts = (product) => {
  const { name, image, price, shippingPrice, discountedPrice, discount } = product;
  const [isInTheCart, setIsInTheCart] = useState()
  const [itIsAdded, setItIsAdded] = useState(false)
  const [isLoad, setIsLoad] = useState(true)
  
  useEffect(() => {
    setIsInTheCart(JSON.parse(localStorage.getItem('dataOfCart')))
    setTimeout(() => {
      setIsLoad(false)
    }, 2000);
  }, [])

  const handleAddCart = () => {
    const cartLength = document.getElementById('card-length')

    if (localStorage.getItem('dataOfCart')) {
      const existingCartDetails = JSON.parse(localStorage.getItem('dataOfCart'))
      existingCartDetails.push(product)
      cartLength.innerHTML = existingCartDetails.length;
      cartLength.className = 'header__content-length'

      setIsInTheCart(existingCartDetails)
      localStorage.setItem('dataOfCart',JSON.stringify(existingCartDetails))


      setItIsAdded(true)
      setTimeout(() => {
        setItIsAdded(false)
      }, 2000);
    }else{
      dataOfCart.push(product)
      cartLength.innerHTML = dataOfCart.length
      cartLength.className = 'header__content-length'
      setIsInTheCart(dataOfCart)
      localStorage.setItem('dataOfCart',JSON.stringify(dataOfCart))
      

      setItIsAdded(true)
      setTimeout(() => {
        setItIsAdded(false)
      }, 2000);
    }
  }

  return (
    <div className='cardProducts'>
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
        {name ? name : 'Refrigeracion Liquida Aorus Waterforce X360'}
      </span>
        {discount ?
          <>
            <div>
              <span className={`cardProducts__price ${discount ? '--price' : ''}`}>
                {formatMoney(price) ? formatMoney(price) :'0'}
              </span> 
              <span className='cardProducts__discount'>-{discount}% </span>
            </div>
            <span>
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
            <button className={`cardProducts__button ${itIsAdded ? '--actived' : ''} --agree` } title='Remover del carrito'>
              <ShoppingCartOutlined/>
            </button>
            :  
            <button className='cardProducts__button' title='Agregar al carrito' onClick={() => handleAddCart()}>
              <AddShoppingCart/>
            </button>
          :
          <button className='cardProducts__button' title='Agregar al carrito' onClick={() => handleAddCart()}>
            <AddShoppingCart/>
          </button>
        }
      </div>
    </div>
  )
}
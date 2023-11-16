import React from 'react'
import './CardProducts.scss'
import {AddShoppingCart} from '@mui/icons-material';
import { dataOfCart } from '../../../data/dataOfCart';


export const CardProducts = (product) => {
  const { name, image, price, shippingPrice } = product;

  const formatoDinero = price.toLocaleString('es-ES', { style: 'currency', currency: 'COP' });

  const handleAddCart = () => {
    dataOfCart.push(product)
    localStorage.setItem('dataOfCart',JSON.stringify(dataOfCart))
    console.log(dataOfCart);
  }

  return (
    <div className='cardProducts'>
      <div className='cardProducts__image'>
        <img 
          src={image}
          alt={name} 
          title={name}  
        />
      </div>
      <h3 className='cardProducts__title' title={name}  >
        {name ? name : 'Refrigeracion Liquida Aorus Waterforce X360'}
      </h3>
      <p>
        $ {formatoDinero ? formatoDinero :'0'}
      </p>
      <div className='cardProducts__content-cart'>
        <p>
          {shippingPrice === 0 ? 'Envío Gratis' : shippingPrice}
          </p>
        <button className='cardProducts__button' title='Agregar al carrito' onClick={() => handleAddCart()}>
          <AddShoppingCart/>
        </button>
      </div>
    </div>
  )
}
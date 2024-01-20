import React, { useEffect, useState } from 'react'
import { CartOfCart } from '../../molecules/card-of-cart'
import { formatMoney } from '../../../utils/formatMoney'
import './cart.scss'

export const Cart = () => {
  const dataCard = localStorage.getItem('dataOfCart') ? JSON.parse(localStorage.getItem('dataOfCart')) : [];

  const [menuFixed, setMenuFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollThreshold = totalHeight * 0.8;
  
      if (window.scrollY >= scrollThreshold) {
        setMenuFixed(true);
      } else {
        setMenuFixed(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const suma = () => {
    let total = 0
    for (const esto of dataCard) {
      if (esto.discount) {
        total = total + esto.discountedPrice
      }else{
        total = total + esto.price 
      }
    }
    return total
  }
  
  return (
    <div className='cart'>
      <h1 className='cart__title'>
        Carrito de Compras
      </h1>
      {dataCard.map( (item) => (
        <CartOfCart
          key={item?.id}
          id={item?.id}
          name={item?.name}
          image={item?.image}
          price={item?.price}
          discount={item?.discount}
          link={item?.link}
          discountedPrice={item?.discountedPrice}
          suma={suma}
        />
      ))}
      <div className='cart__content-info'>
        <div className={`cart__info ${menuFixed ? '--fixed' : ''}`}>
          <div className='cart__info-total'>
            <div className='cart__total'>
              TOTAL:
            </div>
            <div className='cart__price-total'>
              { formatMoney(suma()) }
            </div>
          </div>
          <button onClick={ () => {alert('El proyecto solo tiene el alcance de agregar y eliminar productos al carrito.')}}>Procesar Compra</button>
        </div>

      </div>

    </div>
  )
}

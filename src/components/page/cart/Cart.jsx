import React from 'react'
import { CartOfCart } from '../../molecules/card-of-cart'
import { formatMoney } from '../../../utils/formatMoney'
import './cart.scss'

export const Cart = () => {
  const dataCard = JSON.parse(localStorage.getItem('dataOfCart'));

  const suma = () => {
    let total = 0
    for (const esto of dataCard) {
      total = total + esto.price 
    }
    console.log(total)
    return total
  }
  
  return (
    <div className='cart'>
      {dataCard.map( (item) => (
        <CartOfCart
          key={item.id}
          name={item.name}
          image={item.image}
          price={item.price}
          suma={suma}
        />
      ))}
      <div className='cart__info'>
        <div className='cart__total'>
          Total:
        </div>
        <div className='cart__price-total'>
          { formatMoney(suma()) }
        </div>
      </div>
    </div>
  )
}

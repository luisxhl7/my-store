import React from 'react'
import { useForm } from '../../../hooks/useForm';
import Product from '../../../service/product-service';
import { formatMoney } from '../../../utils/formatMoney';
import './cartOfCart.scss'

export const CartOfCart = ({name, image, price, suma, id, discount, discountedPrice}) => {
  
  const { searchText } = useForm({
    searchText: 1
  })

  return (
    <div className='cardOfCart'>
      <div className='cardOfCart__contet-info'>
        <img src={image} alt={name}/>
        <p className='cardOfCart__text'>
          {name}
        </p>
      </div>
      <div className='cardOfCart__price' onClick={suma}>
        <button onClick={ () => Product.deletePorductsForID(id)} title='Eliminar'>
          X
        </button>
        <span className={`${discount ? '--haveDiscount' : ''}`}>
          {formatMoney(price * searchText) }
        </span>
        {
          discount && 
          <span>
            {formatMoney(discountedPrice * searchText) }
          </span>
        }
      </div>
    </div>
  )
}

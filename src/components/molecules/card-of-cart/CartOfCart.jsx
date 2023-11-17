import React from 'react'
import { formatMoney } from '../../../utils/formatMoney';
import './cartOfCart.scss'
import { useForm } from '../../../hooks/useForm';

export const CartOfCart = ({name, image, price, suma}) => {
  
  const { searchText, onInputChange } = useForm({
    searchText: 1
  })


  return (
    <div className='cardOfCart'>
      <div className='cardOfCart__contet-info'>
        <img src={image} alt="" width={70}/>
        <p className='cardOfCart__text'>
          {name}
        </p>
      </div>
      {/* <input 
        type="number" 
        name='searchText'
        id="" 
        value={searchText}
        onChange={onInputChange}
        className='cardOfCart__input'
      /> */}
      <div className='cardOfCart__price' onClick={suma}>
        {formatMoney(price * searchText) }
      </div>
    </div>
  )
}

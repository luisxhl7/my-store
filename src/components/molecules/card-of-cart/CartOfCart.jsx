import React from 'react'
import { formatMoney } from '../../../utils/formatMoney';
import { useForm } from '../../../hooks/useForm';
import './cartOfCart.scss'

export const CartOfCart = ({name, image, price, suma, id, discount, discountedPrice}) => {
  
  const { searchText, onInputChange } = useForm({
    searchText: 1
  })

  const eliminarElementoPorId = (id) => {
    const esto = JSON.parse(localStorage.getItem('dataOfCart'));
    const index = esto.findIndex(elemento => elemento.id === id);
    
    if (index !== -1) {
      esto.splice(index, 1);
    }
    localStorage.setItem('dataOfCart',JSON.stringify(esto))
    window.location.reload()
  }

  return (
    <div className='cardOfCart'>
      <div className='cardOfCart__contet-info'>
        <img src={image} alt={name}/>
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
        <button onClick={ () => eliminarElementoPorId(id)} title='Eliminar'>
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

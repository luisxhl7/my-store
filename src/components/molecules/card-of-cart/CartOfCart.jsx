import React from 'react'
import { useForm } from '../../../hooks/useForm';
import Product from '../../../service/product-service';
import { formatMoney } from '../../../utils/formatMoney';
import './cartOfCart.scss'
import { useNavigate } from 'react-router-dom';

export const CartOfCart = ({name, image, price, id, discount, discountedPrice, link}) => {
  const navigate = useNavigate();
  const { searchText } = useForm({
    searchText: 1
  })

  const handleNavigateProduct = () => {
    navigate(`/producto/${link}`)
  }

  return (
    <div className='cardOfCart'>
      <div className='cardOfCart__contet-info' onClick={handleNavigateProduct}>
        <img src={image} alt={name}/>
        <p className='cardOfCart__text'>
          {name}
        </p>
      </div>
      <div className='cardOfCart__price'>
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

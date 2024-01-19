import React from 'react'
import { NavLink } from 'react-router-dom'
import './CardProductCategory.scss'

export const CardProductCategory = ({image, url, text, alt}) => {
  return (
    <NavLink
      to={`/productos/${url}`}
      className={'cardProductCategory__url'}
    >
      <div className='cardProductCategory'>
        <div className='cardProductCategory__image'>
          <img src={image} alt={alt} title={text}/>
        </div>
        <p>{text}</p>
      </div>
    </NavLink>
  )
}

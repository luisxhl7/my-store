import React from 'react'
import './CardProductCategory.scss'
import { NavLink } from 'react-router-dom'

export const CardProductCategory = ({image, url, text, alt}) => {
  return (
    <NavLink
      to={`/producto/${url}`}
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

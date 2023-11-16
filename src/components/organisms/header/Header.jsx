import React from 'react'
import images from '../../../assets'
import './Header.scss'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header'>
      <NavLink to={`/home`}>
        <img src={images.logo} alt="" className='header__logo'/>
      </NavLink>
    </div>
  )
}

import React from 'react'
import images from '../../../assets'
import './Header.scss'
import { NavLink } from 'react-router-dom'
import {ShoppingCartOutlined} from '@mui/icons-material';

export const Header = () => {
  return (
    <div className='header'>
      <NavLink to={`/home`}>
        <img src={images.logo} alt="" className='header__logo'/>
        My Store
      </NavLink>
      <NavLink to={`/cart`}>
        <button>
          <ShoppingCartOutlined/>
        </button>
      </NavLink>
    </div>
  )
}

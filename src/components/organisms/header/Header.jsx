import React, { useEffect } from 'react';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import images from '../../../assets';
import './Header.scss';

export const Header = () => {

  useEffect(() => {
    const cartLength = document.getElementById('card-length')
    if (!JSON.parse(localStorage.getItem('dataOfCart'))) {
      cartLength.innerHTML = ''
    }else{
      if (JSON.parse(localStorage.getItem('dataOfCart')).length > 0) {
        cartLength.innerHTML = JSON.parse(localStorage.getItem('dataOfCart')).length
        cartLength.className = 'header__content-length'
      }else{
        cartLength.innerHTML = ''
      }
    }
  }, []);

  return (
    <div className='header'>
      <NavLink to={`/home`} className='header__content-logo'>
        <img src={images.logo} alt="" className='header__logo'/>
        My Store
      </NavLink>
      <NavLink to={`/cart`} className='header__content-cart'>
        <button className='header__button-cart'>
          <ShoppingCartOutlined className='header__icon-cart'/>
          <span id='card-length'></span>
        </button>
      </NavLink>
    </div>
  );
};

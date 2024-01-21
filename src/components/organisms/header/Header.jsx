import React, { useEffect, useState } from 'react';
import { ShoppingCartOutlined, Search } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import images from '../../../assets';
import { useForm } from '../../../hooks/useForm';
import Product from '../../../service/product-service';
import { dataProducts } from '../../../data/dataProducts';
import './Header.scss';

export const Header = () => {
  const [search, setSearch] = useState()
  const [haveResult, setHaveResult] = useState(true)
  const [openOptions, setOpenOptions] = useState(false)

  const { nombre, onInputChange } = useForm({
    nombre: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Datos del formulario:', { nombre });
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const optionsContainer = document.querySelector('.content-search__results');
      if (optionsContainer && !optionsContainer.contains(event.target)) {
        // El clic fue fuera del menú de opciones, ciérralo.
        setOpenOptions(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);
  
  useEffect(() => {
    setOpenOptions(true)
    if (nombre.length > 1) {
      const result = Product.filterForName(dataProducts, nombre)
      if (result.length > 0) {
        setHaveResult(true)
        setSearch(result)
      }else{
        setHaveResult(false)
      }
    }else{
      setSearch(null)
    }

  }, [nombre])
  
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
      <NavLink to={`/home`} className='header__content-logo' title='Inicio'>
        <img src={images.logo} alt="logo" className='header__logo'/>
        <span>
          My Store
        </span>
      </NavLink>
      
      <div className='content-search'>
        <form onSubmit={handleSubmit} autoComplete='off'>
          <input 
            type="text" 
            name="nombre" 
            value={nombre} 
            onChange={onInputChange} 
            className='content-search__input-text'
            placeholder='Busca productos'
          />
          <button className='content-search__button'>
            <Search/>
          </button>
        </form>

        {openOptions &&
          <div className='content-search__results'>
            {haveResult ? 
              search?.map( (item) => (
                <li className='content-search__result' key={item?.id}>
                  <a href={`/producto/${item?.link}`}>
                    {item?.name}
                  </a>
                </li>
              ))
              :
              nombre.length > 2 &&
                <li className='content-search__result'>
                  No hay resultados
                </li>
            }
          </div>
        }
      </div>
      
      <NavLink to={`/cart`} className='header__content-cart'>
        <button className='header__button-cart'>
          <ShoppingCartOutlined className='header__icon-cart' titleAccess='Carrito'/>
          <span id='card-length'></span>
        </button>
      </NavLink>
    </div>
  );
};

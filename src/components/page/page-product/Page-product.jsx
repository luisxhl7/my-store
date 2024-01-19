import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { formatMoney } from '../../../utils/formatMoney';
import { dataProducts } from '../../../data/dataProducts'
import { dataOfCart } from '../../../data/dataOfCart';
import { AddShoppingCart, ShoppingCartOutlined } from '@mui/icons-material';
import { SimpleSlider } from '../../molecules/simpleSlider';
import './page-product.scss'
import { CardProducts } from '../../molecules/card-products/CardProducts';

export const PageProduct = () => {
  const {id} = useParams()
  const [itIsAdded, setItIsAdded] = useState(false)
  const [isInTheCart, setIsInTheCart] = useState()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsInTheCart(JSON.parse(localStorage.getItem('dataOfCart')))
  }, [])

  const filtroPorNombre = (data, nombre) => {
    return data.filter(producto => producto.name.toLowerCase().includes(nombre.toLowerCase()));
  };

  const filtroPorCategorias = (data, discount) => {
    return data?.filter(producto => producto.discount > 0);
  };
  
  const product = filtroPorNombre(dataProducts, id);
  const {name, image, units, marca, price, discountedPrice, discount, description} = product[0]

  const productsCategory = filtroPorCategorias(dataProducts, discount);

  const handleAddCart = () => {
    const cartLength = document.getElementById('card-length')

    if (localStorage.getItem('dataOfCart')) {
      const existingCartDetails = JSON.parse(localStorage.getItem('dataOfCart'))
      existingCartDetails.push(product[0])
      cartLength.innerHTML = existingCartDetails.length;
      cartLength.className = 'header__content-length'

      setIsInTheCart(existingCartDetails)
      localStorage.setItem('dataOfCart',JSON.stringify(existingCartDetails))

      setItIsAdded(true)
      setTimeout(() => {
        setItIsAdded(false)
      }, 2000);
    }else{
      dataOfCart.push(product[0])
      cartLength.innerHTML = dataOfCart.length
      cartLength.className = 'header__content-length'
      setIsInTheCart(dataOfCart)
      localStorage.setItem('dataOfCart',JSON.stringify(dataOfCart))
      
      setItIsAdded(true)
      setTimeout(() => {
        setItIsAdded(false)
      }, 2000);
    }
  }

  const handleOpenDescription = () => {
    setIsOpen(!isOpen)
  }

  const customSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: false,
    arrows: false,  
    responsive: [
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const eliminarElementoPorId = (id) => {
    console.log('asdasd');
    const esto = JSON.parse(localStorage.getItem('dataOfCart'));
    const index = esto.findIndex(elemento => elemento.id === id);
    
    if (index !== -1) {
      esto.splice(index, 1);
    }
    localStorage.setItem('dataOfCart',JSON.stringify(esto))
    window.location.reload()
  }

  return (
    <div className='page-product'>
      <div className='page-product__product'>

        <div className='page-product__content-image'>
          <figure className='page-product__content-image__image'>
            <img 
              src={image} 
              alt={name}
              title={name}
            />
          </figure>
        </div>

        <div className='page-product__content-info --mobile'>
          <div>
            <h1>{name}</h1>
            <div className='page-product__content-info'>
              <div className='page-product__content-info__text'>
                <span>
                  Marca: {marca}
                </span>
              </div>
              <div className='page-product__content-info__text'>
                <span>
                  Unidades disponible: {units}
                </span>
              </div>
            </div>
          </div>

          <div className='page-product__content-info '>
            {discount &&
              <div className='page-product__content-info__text'>
                <span className='page-product__content-info__text__origin-price'>
                  {formatMoney(price) ? formatMoney(price) : '0'} 
                </span>
                <span className='page-product__content-info__text__discount'>
                  -{discount}%
                </span>
              </div>
            }
            <div className='page-product__content-info__text'>
              <span className='page-product__content-info__text__final-price'>
                {formatMoney( discountedPrice )} 
              </span>
            </div>
          </div>
          
          {isInTheCart ?
            isInTheCart.some((producto) => producto.name === name) ?
              <button className='page-product__button' title='Remover del carrito' onClick={ () => eliminarElementoPorId(product[0]?.id)}>
                <ShoppingCartOutlined className={`page-product__button__icon ${itIsAdded ? '--actived' : ''} --agree` }/>
                Eliminar al carrito
              </button>
              :  
              <button className='page-product__button' title='ñadir al carrito' onClick={() => handleAddCart()}>
                <AddShoppingCart className={`page-product__button__icon ${itIsAdded ? '--actived' : ''} --agree` }/>
                Añadir al carritoasdas
              </button>
            :
            <button className='page-product__button' title='ñadir al carrito'onClick={() => handleAddCart()}>
              <AddShoppingCart className={`page-product__button__icon ${itIsAdded ? '--actived' : ''} --agree` }/>
              Añadir al carrito
            </button>
          }
        </div>

      </div>
      {description &&
        <div className={`page-product__description-product ${isOpen ? '--isOpen' : '--isHide'}`}>
          <h2>Descripción</h2>
          <p>{description}</p>
          <div className='page-product__description-product__more-info' onClick={handleOpenDescription}>{isOpen ? 'Ver menos' : 'Ver más'}</div>
        </div>
      }

      <div className='page-product__similar-products'>
        <h2 className='page-product__title-similar-products'>Conoce nuestras promociones</h2>
        <SimpleSlider customSettings={customSettings}>
          {productsCategory.map( (item ) => (
            <div className='page-product__content-card' key={item?.id}>
              <CardProducts {...item}/>
            </div>
          ))}
        </SimpleSlider>
      </div>
    </div>
  )
}

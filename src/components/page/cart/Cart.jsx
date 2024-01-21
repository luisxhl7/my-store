import React, { useEffect, useState } from 'react'
import { CartOfCart } from '../../molecules/card-of-cart'
import { formatMoney } from '../../../utils/formatMoney'
import './cart.scss'
import { useForm } from '../../../hooks/useForm'
import { Modal } from '../../molecules/modal'

export const Cart = () => {
  const dataCard = localStorage.getItem('dataOfCart') ? JSON.parse(localStorage.getItem('dataOfCart')) : [];

  const [menuFixed, setMenuFixed] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { nombre, apellido, cedula, cvc, numero, expedicion, onInputChange } = useForm({
    nombre: '',
    apellido: '',
    cedula: '',
    cvc: '',
    numero: '',
    expedicion: '',
  });

  const openModal = () => {
    if (dataCard.length > 0) {
      setModalVisible(true);
    }else{
      alert('No tienes productos en tu carrito')
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // console.log(nombre, apellido, cedula, cvc, numero, expedicion)
    alert('Este proyecto actualmente solo cuenta con alcance para realizar búsquedas, agregar y eliminar productos del carrito.')
  }

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollThreshold = totalHeight * 0.8;
  
      if (window.scrollY >= scrollThreshold) {
        setMenuFixed(true);
      } else {
        setMenuFixed(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const suma = () => {
    let total = 0
    for (const esto of dataCard) {
      if (esto.discount) {
        total = total + esto.discountedPrice
      }else{
        total = total + esto.price 
      }
    }
    return total
  }
  
  return (
    <div className='cart'>
       {modalVisible && (
        <Modal onClose={closeModal}>
          <form onSubmit={handleOnSubmit} autoComplete='off'>
            <h3>formulario</h3>
            <p>Este proyecto es solo ilustrativo, no requieres ingresar datos reales</p>

            <div className='cart__content-input'>
              <label htmlFor="nombre">
                Nombre:
              </label>
              <input
                type="text" 
                name="nombre" 
                id='nombre'
                value={nombre} 
                onChange={onInputChange} 
                className=''
                placeholder='Nombre'
              />
            </div>

            <div className='cart__content-input'>
              <label htmlFor="apellido">
                Apellidos:
              </label>
              <input 
                type="text" 
                name="apellido" 
                id='apellido'
                value={apellido} 
                onChange={onInputChange} 
                className=''
                placeholder='Apellidos'
              />
            </div>

            <div className='cart__content-input'>
              <label htmlFor="cedula">
              Cédula:
              </label>
              <input 
                type="text" 
                name="cedula" 
                id='cedula'
                value={cedula} 
                onChange={onInputChange} 
                className=''
                placeholder='Cédula'
              />
            </div>

            <div className='cart__content-input'>
              <label htmlFor="cvc">
                cvc:
              </label>
              <input 
                type="text" 
                name="cvc" 
                id='cvc'
                value={cvc} 
                onChange={onInputChange} 
                className=''
                placeholder='cvc'
              />
            </div>

            <div className='cart__content-input'>
              <label htmlFor="numero">
                Número:
              </label>
              <input 
                type="text" 
                name="numero" 
                id='numero'
                value={numero} 
                onChange={onInputChange} 
                className=''
                placeholder='Número'
              />
            </div>

            <div className='cart__content-input'>
              <label htmlFor="expedicion">
                Expedición:
              </label>
              <input 
                type="text" 
                name="expedicion" 
                id='expedicion'
                value={expedicion} 
                onChange={onInputChange} 
                className=''
                placeholder='Expedición'
              />
            </div>

            <button className='cart__button'>Finalizar Compra</button>
          </form>
        </Modal>
      )}


      <h1 className='cart__title'>
        Carrito de Compras
      </h1>
      {dataCard.map( (item) => (
        <CartOfCart
          key={item?.id}
          id={item?.id}
          name={item?.name}
          image={item?.image}
          price={item?.price}
          discount={item?.discount}
          link={item?.link}
          discountedPrice={item?.discountedPrice}
          suma={suma}
        />
      ))}
      <div className='cart__content-info'>
        <div className={`cart__info ${menuFixed ? '--fixed' : ''}`}>
          <div className='cart__info-total'>
            <div className='cart__total'>
              TOTAL:
            </div>
            <div className='cart__price-total'>
              { formatMoney(suma()) }
            </div>
          </div>
          <button onClick={ openModal}>Procesar Compra</button>
        </div>

      </div>

    </div>
  )
}
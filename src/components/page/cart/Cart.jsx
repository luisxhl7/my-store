import React, { useEffect, useState } from 'react'
import { CartOfCart } from '../../molecules/card-of-cart'
import { formatMoney } from '../../../utils/formatMoney'
import './cart.scss'

export const Cart = () => {
  const dataCard = localStorage.getItem('dataOfCart') ? JSON.parse(localStorage.getItem('dataOfCart')) : [];

  const [menuFixed, setMenuFixed] = useState(false);
  
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
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
       {/* {modalVisible && (
        <Modal onClose={closeModal}>
          <form onSubmit={() => handleOnSubmit()}>
            <h3>formulario</h3>
            <p>Este proyecto es solo ilustrativo no requieres ingresar datos reales</p>
            <label htmlFor="">
              Nombre:
            </label>
              <input type="text" />
            <label htmlFor="">
              Nombre:
            </label>
              <input type="text" />
            <label htmlFor="">
              Nombre:
            </label>
              <input type="text" />
            <label htmlFor="">
              Nombre:
            </label>
              <input type="text" />
            <label htmlFor="">
              Nombre:
            </label>
              <input type="text" />
            <label htmlFor="">
              Nombre:
            </label>
              <input type="text" />
            <button>Finalizar Compra</button>
          </form>
        </Modal>
      )} */}

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
          <button onClick={() => { alert('El proyecto solo tiene el alcance de agregar y eliminar productos al carrito.')}}>Procesar Compra</button>
        </div>

      </div>

    </div>
  )
}

const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};